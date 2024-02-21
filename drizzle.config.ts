import dotenv from "dotenv";
import type { Config } from "drizzle-kit";

dotenv.config({
  path: ".env.local",
});

export default {
  out: "./drizzle/migrations",
  schema: "./src/db/schema.ts",
  driver: "pg",
  dbCredentials: {
    connectionString: process.env.POSTGRES_URL!,
    ssl: true,
    password: process.env.POSTGRES_PASSWORD!,
  },
} satisfies Config;
