// Applies drizzle/*.sql to the database in order, once each, recording them in _migrations.
// Uses Turso when TURSO_DATABASE_URL is set, otherwise the local file .data/local.db. Runs before every build.
import { createClient } from "@libsql/client";
import { mkdirSync, readdirSync, readFileSync } from "node:fs";
import path from "node:path";

const url = process.env.TURSO_DATABASE_URL;
if (process.env.VERCEL && !url) {
  console.error("TURSO_DATABASE_URL is not set. Connect a Turso database to this Vercel project (see README, Deploying to Vercel).");
  process.exit(1);
}
if (!url) mkdirSync(path.join(process.cwd(), ".data"), { recursive: true });
const db = createClient({ url: url || "file:" + path.join(process.cwd(), ".data", "local.db"), authToken: process.env.TURSO_AUTH_TOKEN });

await db.execute("CREATE TABLE IF NOT EXISTS _migrations (name TEXT PRIMARY KEY, applied_at INTEGER NOT NULL)");
const done = new Set((await db.execute("SELECT name FROM _migrations")).rows.map(r => r.name));
const dir = path.join(process.cwd(), "drizzle");
for (const file of readdirSync(dir).filter(f => f.endsWith(".sql")).sort()) {
  if (done.has(file)) continue;
  const statements = readFileSync(path.join(dir, file), "utf8").split("--> statement-breakpoint").map(s => s.trim()).filter(Boolean);
  await db.batch([...statements, { sql: "INSERT INTO _migrations (name, applied_at) VALUES (?, ?)", args: [file, Date.now()] }], "write");
  console.log("Applied", file);
}
console.log(`Database ready (${url ? "Turso" : "local file"}).`);
