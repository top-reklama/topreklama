import { drizzle } from "drizzle-orm/libsql";
import { getDatabase } from "@/lib/platform";
import * as schema from "./schema";

// Typed queries over the same Turso / local libSQL client the API routes use.
export function getDb() {
  return drizzle(getDatabase().client, { schema });
}
