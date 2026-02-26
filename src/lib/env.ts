import { z } from "zod";

const envSchema = z.object({
  RESEND_API_KEY: z.string().min(1),
  CONTACT_EMAIL: z.string().email(),
  FROM_EMAIL: z.string().email(),
});

export const env = envSchema.parse(process.env);