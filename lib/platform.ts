import {createClient, type Client, type InValue, type ResultSet} from '@libsql/client';
import {get, put, del} from '@vercel/blob';
import {mkdir, readFile, rm, writeFile} from 'node:fs/promises';
import path from 'node:path';

// Storage for Vercel: Turso (libSQL, the same SQLite dialect the queries were written for) and Vercel Blob
// with private access. Both are shaped like the Cloudflare D1/R2 bindings the routes already use, so the
// routes keep their SQL. Without credentials (local development) the database is a file and blobs live on disk.

type Row = Record<string, unknown>;
const toRows = (r: ResultSet): Row[] => r.rows.map(row => Object.fromEntries(r.columns.map((c, i) => [c, row[i]])));

export class Statement {
  constructor(private client: Client, readonly sql: string, readonly args: InValue[] = []) {}
  bind(...args: unknown[]) { return new Statement(this.client, this.sql, args as InValue[]); }
  async first<T = Row>(): Promise<T | null> { return (toRows(await this.client.execute({sql: this.sql, args: this.args}))[0] ?? null) as T | null; }
  async all<T = Row>(): Promise<{results: T[]}> { return {results: toRows(await this.client.execute({sql: this.sql, args: this.args})) as T[]}; }
  async run() { const r = await this.client.execute({sql: this.sql, args: this.args}); return {meta: {changes: r.rowsAffected}}; }
}

export class Database {
  constructor(readonly client: Client) {}
  prepare(sql: string) { return new Statement(this.client, sql); }
  // Runs every statement in one transaction, like D1's batch.
  async batch(statements: Statement[]) {
    const results = await this.client.batch(statements.map(s => ({sql: s.sql, args: s.args})), 'write');
    return results.map(r => ({results: toRows(r), meta: {changes: r.rowsAffected}}));
  }
}

let database: Database | undefined;
export function getDatabase() {
  if (!database) {
    const url = process.env.TURSO_DATABASE_URL || 'file:' + path.join(process.cwd(), '.data', 'local.db');
    database = new Database(createClient({url, authToken: process.env.TURSO_AUTH_TOKEN, intMode: 'number'}));
  }
  return database;
}

export type StoredObject = {body: ReadableStream<Uint8Array>};
export interface Bucket {
  put(key: string, bytes: Uint8Array, options: {httpMetadata: {contentType: string}}): Promise<void>;
  get(key: string): Promise<StoredObject | null>;
  delete(key: string): Promise<void>;
}

export const blobConfigured = () => !!process.env.BLOB_READ_WRITE_TOKEN;

const vercelBucket: Bucket = {
  async put(key, bytes, {httpMetadata}) { await put(key, Buffer.from(bytes), {access: 'private', contentType: httpMetadata.contentType, addRandomSuffix: false, allowOverwrite: false}); },
  async get(key) { const r = await get(key, {access: 'private', useCache: false}); return r && r.statusCode === 200 ? {body: r.stream} : null; },
  async delete(key) { await del(key); },
};

// Keys are generated server-side (`artwork/<id>`, `portfolio/<id>`); the check keeps them inside the folder.
const blobRoot = () => path.join(process.cwd(), '.data', 'blobs');
const localPath = (key: string) => { const p = path.join(blobRoot(), key); if (!p.startsWith(blobRoot() + path.sep)) throw new Error('bad key'); return p; };
const localBucket: Bucket = {
  async put(key, bytes) { const p = localPath(key); await mkdir(path.dirname(p), {recursive: true}); await writeFile(p, bytes, {flag: 'wx'}); },
  async get(key) { try { return {body: new Response(await readFile(localPath(key))).body!}; } catch { return null; } },
  async delete(key) { await rm(localPath(key), {force: true}); },
};

export const getBucket = (): Bucket => blobConfigured() ? vercelBucket : localBucket;

// Reads a stored object fully (used to verify files that browsers upload straight to Blob).
export async function readObject(key: string, max: number) {
  const object = await getBucket().get(key);
  if (!object) return null;
  const reader = object.body.getReader(); const chunks: Uint8Array[] = []; let size = 0;
  while (true) { const {value, done} = await reader.read(); if (done) break; size += value.byteLength; if (size > max) { await reader.cancel(); throw new Error('size'); } chunks.push(value); }
  const all = new Uint8Array(new ArrayBuffer(size)); let offset = 0; for (const c of chunks) { all.set(c, offset); offset += c.byteLength; }
  return all;
}
