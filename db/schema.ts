import { relations } from "drizzle-orm";
import {
  pgTable,
  uuid,
  varchar,
  date,
  boolean,
  timestamp,
  pgEnum,
  text,
  unique,
  integer,
} from "drizzle-orm/pg-core";

export const rolesEnum = pgEnum("roles", [
  "admin",
  "policyHolder",
  "agent",
  "consultant",
  "sales",
  "customerService",
  "contentWriter",
]);

export const users = pgTable("users", {
  id: uuid("id").primaryKey(),
  firstName: varchar("first_name", { length: 25 }).notNull(),
  middleName: varchar("middle_name", { length: 25 }).notNull(),
  lastName: varchar("last_name", { length: 25 }).notNull(),
  phone: varchar("phone", { length: 20 }).unique().notNull(),
  email: varchar("email", { length: 128 }).unique(),
  password: varchar("password", { length: 256 }).unique().notNull(),
  dateOfBirth: date("date_of_birth", { mode: "date" }).notNull(),
  gender: boolean("gender").notNull().default(true),
  city: varchar("city", { length: 50 }).notNull(),
  governorate: varchar("governorate", { length: 50 }).notNull(),
  street: varchar("street", { length: 50 }).notNull(),
  role: rolesEnum("role").default("policyHolder").notNull(),
  createdAt: timestamp("created_at", { mode: "date" }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { mode: "date" }).defaultNow().notNull(),
});

export type Users = typeof users.$inferSelect;

export const products = pgTable("products", {
  id: uuid("id").primaryKey(),
  name: varchar("name", { length: 50 }).unique().notNull(),
  description: text("description").notNull(),
  coverageDetails: text("coverage_details").notNull(),
  eligibilityCriteria: text("eligibility_criteria").notNull(),
  termsOfService: text("terms_of_service").notNull(),
  createdAt: timestamp("created_at", { mode: "date" }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { mode: "date" }).defaultNow().notNull(),
});

export type Products = typeof products.$inferSelect;

export const productDurationEnum = pgEnum("product_duration", [
  "daily",
  "monthly",
  "annually",
]);

export const policies = pgTable(
  "policies",
  {
    id: uuid("id").primaryKey(),
    userId: uuid("user_id")
      .notNull()
      .references(() => users.id),
    productId: uuid("product_id")
      .notNull()
      .references(() => products.id),
    policyDuration: productDurationEnum("policy_duration").notNull(),
    premium: integer("premium").notNull(),
    startDate: date("start_date", { mode: "date" }).notNull(),
    endDate: date("end_date", { mode: "date" }).notNull(),
  },
  (t) => ({ unq: unique().on(t.userId, t.productId) }),
);
