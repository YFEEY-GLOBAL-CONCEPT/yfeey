import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters")
    .regex(/^[a-zA-Z\s\-'.]+$/, "Name can only contain letters, spaces, hyphens, periods, and apostrophes"),
  email: z
    .string()
    .trim()
    .toLowerCase()
    .email("Invalid email address")
    .min(5, "Email is too short")
    .max(100, "Email must be less than 100 characters"),
  phone: z
    .string()
    .trim()
    .max(20, "Phone number must be less than 20 characters")
    .refine(
      (val) => val === "" || /^\+?[0-9\s\-()]+$/.test(val),
      "Invalid phone number format"
    )
    .optional(),
  subject: z
    .string()
    .trim()
    .max(150, "Subject must be less than 150 characters")
    .optional()
    .or(z.literal("")),
  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message cannot exceed 2000 characters"),
  company: z.string().optional().or(z.literal("")), // Honeypot field
});

export type ContactFormData = z.infer<typeof contactSchema>;
