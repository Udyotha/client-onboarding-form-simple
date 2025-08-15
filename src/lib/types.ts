import { z } from "zod";

export const signUpSchema = z
  .object({
    email: z.string().min(1, "Email is required").email("Invalid email address"),
    password: z.string().min(10, "Password must be at least 10 characters"),
    confirmPassword: z.string(),
    fullName: z
    .string()
    .min(2, "Full name is required")
    .max(80, "Full name must be at most 80 characters")
    .regex(
    /^[A-Za-z\s'-]+$/,
    "Full name can only contain letters, spaces, apostrophes, and hyphens"
  ),
    companyName: z
      .string()
      .min(2, "Company name is required")
      .max(100, "Company name must be at most 100 characters"),
    budget: z
      .number()
      .int()
      .min(100, "Budget must be at least $100")
      .max(1_000_000, "Budget must be at most $1,000,000")
      .optional(),
    projectStartDate: z
      .date()
      .refine(
        (date) => {
          const today = new Date();
          today.setHours(0, 0, 0, 0);
          return date >= today;
        },
        { message: "Project start date must be today or later" }
      ),
    acceptTerms: z
      .boolean()
      .refine((val) => val === true, { message: "You must accept the terms" }),
    services: z
      .array(
        z.enum(["UI/UX", "Branding", "Web Dev", "Mobile App"])
      )
      .min(1, "Please select at least one service"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
  });

export type TSignUpSchema = z.infer<typeof signUpSchema>;