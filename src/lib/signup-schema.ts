import { z } from "zod";

export const SignupSchema = z
  .object({
    firstName: z.string().trim().min(2, "First name is required"),
    middleName: z.string().trim().min(2, "Middle name is required"),
    lastName: z.string().trim().min(2, "Last name is required"),
    email: z.union([z.string().email(), z.literal("")]),
    phone: z.string().trim().min(9).max(14),
    password: z
      .string()
      .trim()
      .min(8, "Password must be at least 8 characters")
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
      ),
    confirmPassword: z.string().trim().min(8),
    city: z.string().trim().min(2, "City is required"),
    governorate: z.string().trim().min(2, "Governorate is required"),
    street: z.string().trim().min(2, "Street is required"),
    dateOfBirth: z.coerce
      .date()
      .refine((date) => {
        return date <= new Date();
      }, "Date of birth must be in the past")
      .refine((date) => {
        const now = new Date();
        return (
          date < new Date(now.getFullYear() - 18, now.getMonth(), now.getDate())
        );
      }, "You must be at least 18 years old"),
    gender: z.enum(["Male", "Female"]),
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
