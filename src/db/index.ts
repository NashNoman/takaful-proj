import * as schema from "./schema";
import { drizzle } from "drizzle-orm/vercel-postgres";
import { sql } from "@vercel/postgres";
// import postgres from "postgres";

// const dbUrl = process.env.DATABASE_URL!;
// const queryClient = postgres(sql);

export const db = drizzle(sql, { schema });
