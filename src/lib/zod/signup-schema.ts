import { z } from "zod";

export const SignupSchema = z
  .object({
    products: z
      .object({
        Healthcare: z.boolean().optional(),
        Motorcycle: z.boolean().optional(),
        MiniVan: z.boolean().optional(),
        "Mini-Truck": z.boolean().optional(),
      })
      .refine((data) => {
        return Object.values(data).some((value) => value);
      }, "At least one product is required"),
    firstName: z.string().trim().min(2, "First name is required"),
    middleName: z.string().trim().min(2, "Middle name is required"),
    lastName: z.string().trim().min(2, "Last name is required"),
    email: z.union([z.string().email(), z.literal("")]),
    phoneNumber: z
      .string()
      .trim()
      .regex(/^(\+967)?(7[0-9]{8}|[1-9][0-9]{6})$/i, "Invalid phone number"),
    password: z
      .string()
      .trim()
      .min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string().trim().min(8),
    city: z.string().trim().min(2, "City is required"),
    street: z.string().trim().min(2, "Street is required"),
    dateOfBirth: z.coerce
      .date({
        errorMap: (issue, { defaultError }) => ({
          message:
            issue.code === "invalid_date"
              ? "Date of birth is required"
              : defaultError,
        }),
      })
      .refine((date) => {
        return date <= new Date();
      }, "Date of birth must be in the past")
      .refine((date) => {
        const now = new Date();
        return (
          date < new Date(now.getFullYear() - 18, now.getMonth(), now.getDate())
        );
      }, "You must be at least 18 years old"),
    gender: z.enum(["Male", "Female"], {
      errorMap: () => ({
        message: "Gender is required",
      }),
    }),
    occupation: z.string().trim().min(2, "Occupation is required"),
    sourceOfIncome: z.enum(["Salary", "Business", "Other"]),
    avgIncome: z.coerce.number().int().min(1, "Average income is required"),
    ssn: z
      .string()
      .trim()
      .min(11, "SSN should be 11 characters")
      .max(11, "SSN should be 11 characters"),
  })
  .superRefine(({ password, confirmPassword }, ctx) => {
    if (password !== confirmPassword) {
      ctx.addIssue({
        code: "custom",
        message: "Passwords do not match",
        path: ["confirmPassword"],
      });
    }
  });

export type SignupInputs = z.infer<typeof SignupSchema>;
