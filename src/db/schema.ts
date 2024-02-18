import { relations } from "drizzle-orm";
import {
  pgTable,
  serial,
  varchar,
  date,
  boolean,
  timestamp,
  pgEnum,
  text,
  integer,
  json,
  primaryKey,
} from "drizzle-orm/pg-core";

export const typeEnum = pgEnum("roles", [
  "admin",
  "customer",
  "customer_service",
  "content_writer",
  "sales",
]);

type Address = {
  city: string;
  street: string;
};

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  firstName: varchar("first_name", { length: 25 }).notNull(),
  middleName: varchar("middle_name", { length: 25 }).notNull(),
  lastName: varchar("last_name", { length: 25 }).notNull(),
  phoneNumber: varchar("phone_number", { length: 20 }).unique().notNull(),
  email: varchar("email", { length: 128 }).unique(),
  password: varchar("password", { length: 256 }).unique().notNull(),
  dateOfBirth: date("date_of_birth", { mode: "date" }).notNull(),
  address: json("address").$type<Address>().notNull(),
  gender: boolean("gender").notNull().default(true),
  occupation: varchar("occupation", { length: 50 }).notNull(),
  avgIncome: integer("avg_income").notNull(),
  type: typeEnum("type").default("customer").notNull(),
  createdAt: timestamp("created_at", { mode: "date" }).defaultNow(),
});

export const usersRelations = relations(users, ({ one, many }) => ({
  // package: one(packages),
  claims: many(claims),
  policies: many(policies),
}));

export type Users = typeof users.$inferSelect;

// export const paymentFrequencyEnum = pgEnum("payment_frequency", [
//   "daily",
//   "monthly",
// ]);

export const products = pgTable("products", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 50 }).unique().notNull(),
  description: text("description").notNull(),
  // benefitSummary: text("benefit_summary").notNull(),
  isMonthly: boolean("is_monthly").default(true).notNull(),
  basePremium: integer("base_premium").notNull(),
  active: boolean("active").default(true).notNull(),
  createdAt: timestamp("created_at", { mode: "date" }).defaultNow(),
  updatedAt: timestamp("updated_at", { mode: "date" }).defaultNow(),
});

export const productsRelations = relations(products, ({ one, many }) => ({
  policies: many(policies),
  basicCoverages: many(basicCoverage),
  // additionalCoverages: many(additionalCoverage),
  // productCombinations: many(productCombination),
}));

export type Products = typeof products.$inferSelect;

// export const packages = pgTable("packages", {
//   id: serial("id").primaryKey(),
//   customerId: integer("customer_id")
//     .notNull()
//     .references(() => users.id)
//     .unique(),
//   createdAt: timestamp("created_at", { mode: "date" }).defaultNow(),
//   discountRuleId: integer("discount_rule_id")
//     .notNull()
//     .references(() => discountRules.id),
// });

// export const packagesRelations = relations(packages, ({ one, many }) => ({
//   customer: one(users, {
//     fields: [packages.customerId],
//     references: [users.id],
//   }),
//   // policies: many(policies),
//   packageToBonusCoverage: many(packageToBonusCoverage),
//   payments: many(payments),
//   discountRule: one(discountRules, {
//     fields: [packages.discountRuleId],
//     references: [discountRules.id],
//   }),
// }));

// export type Packages = typeof packages.$inferSelect;

export const policyStatusEnum = pgEnum("policy_status", [
  "active",
  "inactive",
  "expired",
]);

export const policies = pgTable("policies", {
  id: serial("id").primaryKey(),
  productId: integer("product_id")
    .notNull()
    .references(() => products.id),
  customerId: integer("customer_id")
    .notNull()
    .references(() => users.id),
  startDate: date("start_date", { mode: "date" }).notNull(),
  endDate: date("end_date", { mode: "date" }).notNull(),
  status: policyStatusEnum("status").default("active").notNull(),
  coveragePremium: integer("coverage_premium"),
  totalPremium: integer("total_premium"),
  effectiveDate: date("effective_date", { mode: "date" }).notNull(),
});

export const policiesRelations = relations(policies, ({ one, many }) => ({
  customer: one(users, {
    fields: [policies.customerId],
    references: [users.id],
  }),
  claims: many(claims),
  policyToAdditionalCoverage: many(policyToAdditionalCoverage),
  product: one(products, {
    fields: [policies.productId],
    references: [products.id],
  }),
}));

export type Policies = typeof policies.$inferSelect;

export const discountRules = pgTable("discount_rules", {
  id: serial("id").primaryKey(),
  numberOfProducts: integer("number_of_products").notNull(),
  description: text("description"),
  discountRate: integer("discount_rate").notNull(),
  createdAt: timestamp("created_at", { mode: "date" }).defaultNow(),
  updatedAt: timestamp("updated_at", { mode: "date" }).defaultNow(),
});

export type DiscountRules = typeof discountRules.$inferSelect;

export const claimsStatusEnum = pgEnum("claim_status", [
  "pending",
  "approved",
  "denied",
]);

export const claims = pgTable("claims", {
  id: serial("id").primaryKey(),
  policyId: integer("policy_id")
    .notNull()
    .references(() => policies.id),
  status: claimsStatusEnum("status").default("pending").notNull(),
  claimDate: timestamp("claim_date", { mode: "date" }).defaultNow(),
  amountClaimed: integer("amount_claimed"),
  payoutDate: timestamp("payout_date", { mode: "date" }),
});

export const claimsRelations = relations(claims, ({ one }) => ({
  policy: one(policies, {
    fields: [claims.policyId],
    references: [policies.id],
  }),
}));

export type Claims = typeof claims.$inferSelect;

export const basicCoverage = pgTable("basic_coverage", {
  id: serial("id").primaryKey(),
  productId: integer("product_id")
    .notNull()
    .references(() => products.id),
  name: varchar("name", { length: 100 }).notNull(),
  // description: text("description").notNull(),
  benefitDetails: text("benefit_details").notNull(),
  active: boolean("active").default(true).notNull(),
  // isOptional: boolean("is_optional").default(false).notNull(),
  // additionalRate: integer("additional_rate"),
  createdAt: timestamp("created_at", { mode: "date" }).defaultNow(),
  // updatedAt: timestamp("updated_at", { mode: "date" }).defaultNow(),
});

export type BasicCoverage = typeof basicCoverage.$inferSelect;

export const additionalCoverage = pgTable("additional_coverage", {
  id: serial("id").primaryKey(),
  productId: integer("product_id")
    .notNull()
    .references(() => products.id),
  name: varchar("name", { length: 100 }).notNull(),
  description: text("description").notNull(),
  benefitDetails: text("benefit_details").notNull(),
  active: boolean("active").default(true).notNull(),
  // isOptional: boolean("is_optional").default(false).notNull(),
  isPercentage: boolean("is_percentage").default(false).notNull(),
  additionalRate: integer("additional_rate"),
  createdAt: timestamp("created_at", { mode: "date" }).defaultNow(),
  // updatedAt: timestamp("updated_at", { mode: "date" }).defaultNow(),
});

export type AdditionalCoverage = typeof additionalCoverage.$inferSelect;

export const bonusCoverage = pgTable("bonus_coverage", {
  id: serial("id").primaryKey(),
  productCombinationId: integer("product_combination_id").references(
    () => productCombination.id,
  ),
  name: varchar("name", { length: 50 }).notNull(),
  description: text("description").notNull(),
  bonusCriteria: text("bonus_criteria").notNull(),
  active: boolean("active").default(true).notNull(),
  createdAt: timestamp("created_at", { mode: "date" }).defaultNow(),
  // updatedAt: timestamp("updated_at", { mode: "date" }).defaultNow(),
});

export const bonusCoverageRelations = relations(
  bonusCoverage,
  ({ one, many }) => ({
    productCombination: one(productCombination, {
      fields: [bonusCoverage.productCombinationId],
      references: [productCombination.id],
    }),
    // packageToBonusCoverage: many(packageToBonusCoverage),
  }),
);

export type BonusCoverage = typeof bonusCoverage.$inferSelect;

export const productCombination = pgTable("product_combination", {
  id: serial("id").primaryKey(),
  productIds: json("product_ids").$type<number[]>().notNull(),
});

export const productCombinationRelations = relations(
  productCombination,
  ({ one, many }) => ({
    products: one(products, {
      fields: [productCombination.productIds],
      references: [products.id],
    }),
    bonusCoverages: many(bonusCoverage),
  }),
);

export type ProductCombination = typeof productCombination.$inferSelect;

export const policyToAdditionalCoverage = pgTable(
  "policy_to_additional_coverage",
  {
    policyId: integer("policy_id")
      .notNull()
      .references(() => policies.id),
    additionalCoverageId: integer("additional_coverage_id")
      .notNull()
      .references(() => additionalCoverage.id),
    active: boolean("active").default(true).notNull(),
    createdAt: timestamp("created_at", { mode: "date" }).defaultNow(),
  },
  (t) => ({
    pk: primaryKey(t.policyId, t.additionalCoverageId),
  }),
);

// export const packageToBonusCoverage = pgTable(
//   "package_to_bonus_coverage",
//   {
//     packageId: integer("package_id")
//       .notNull()
//       .references(() => packages.id),
//     bonusCoverageId: integer("bonus_coverage_id")
//       .notNull()
//       .references(() => bonusCoverage.id),
//     active: boolean("active").default(true).notNull(),
//     createdAt: timestamp("created_at", { mode: "date" }).defaultNow(),
//   },
//   (t) => ({
//     pk: primaryKey(t.packageId, t.bonusCoverageId),
//   }),
// );

export const payments = pgTable("payments", {
  id: serial("id").primaryKey(),
  userId: integer("user_id")
    .notNull()
    .references(() => users.id),
  discountRuleId: integer("discount_rule_id").references(
    () => discountRules.id,
  ),
  fullAmount: integer("full_amount").notNull(),
  // amount
  payedAmount: integer("payed_amount").notNull(),
  paymentDate: timestamp("payment_date", { mode: "date" }).defaultNow(),
});

export const paymentRelations = relations(payments, ({ one }) => ({
  package: one(users, {
    fields: [payments.userId],
    references: [users.id],
  }),
}));

export type Payments = typeof payments.$inferSelect;

// Many-to-Many relations
export const policyToAdditionalCoverageRelation = relations(
  policyToAdditionalCoverage,
  ({ one }) => ({
    policy: one(policies, {
      fields: [policyToAdditionalCoverage.policyId],
      references: [policies.id],
    }),
    additionalCoverage: one(additionalCoverage, {
      fields: [policyToAdditionalCoverage.additionalCoverageId],
      references: [additionalCoverage.id],
    }),
  }),
);

// export const packageToBonusCoverageRelation = relations(
//   packageToBonusCoverage,
//   ({ one }) => ({
//     package: one(packages, {
//       fields: [packageToBonusCoverage.packageId],
//       references: [packages.id],
//     }),
//     bonusCoverage: one(bonusCoverage, {
//       fields: [packageToBonusCoverage.bonusCoverageId],
//       references: [bonusCoverage.id],
//     }),
//   }),
// );
