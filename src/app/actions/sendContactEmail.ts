"use server";

import { Resend } from "resend";
import { headers } from "next/headers";
import { env } from "@/lib/env";
import { isRateLimited } from "@/lib/rate-limit";
import { escapeHtml } from "@/lib/sanitize";

/* -------------------------------------------------------------------------- */
/*                                   TYPES                                    */
/* -------------------------------------------------------------------------- */

export type ContactActionResponse =
  | { success: true }
  | { success: false; error: string };

/* -------------------------------------------------------------------------- */
/*                              ZOD VALIDATION                                */
/* -------------------------------------------------------------------------- */

import { contactSchema } from "@/lib/validations/contact";

const resend = new Resend(env.RESEND_API_KEY);

/* -------------------------------------------------------------------------- */
/*                               SERVER ACTION                                */
/* -------------------------------------------------------------------------- */

export async function sendContactEmail(
  formData: unknown
): Promise<ContactActionResponse> {
  try {
    /* --------------------------- GET CLIENT IP --------------------------- */
const headerList = await headers();
const ip =
  headerList.get("x-forwarded-for")?.split(",")[0] ??
  "anonymous";

    if (isRateLimited(ip)) {
      return {
        success: false,
        error: "Too many submissions. Please try again later.",
      };
    }

    /* --------------------------- VALIDATE DATA --------------------------- */

    const parsed = contactSchema.safeParse(formData);

    if (!parsed.success) {
      console.error("Validation Error:", parsed.error.flatten().fieldErrors);
      return { 
        success: false, 
        error: "Invalid form data. Please check your inputs." 
      };
    }

    const { name, email, phone, subject, message, company } =
      parsed.data;

    /* --------------------------- HONEYPOT CHECK -------------------------- */

    if (company && company.length > 0) {
      return { success: false, error: "Spam detected." };
    }

    /* --------------------------- SANITIZE INPUT -------------------------- */

    const escName = escapeHtml(name.trim());
    const escEmail = escapeHtml(email.trim());
    const escPhone = escapeHtml(phone?.trim() || "Not provided");
    const escSubject = escapeHtml(subject?.trim() || "General Inquiry");
    const escMessage = escapeHtml(message.trim());

    /* ----------------------------- SEND EMAILS --------------------------- */
    
    // Resend requires a verified domain to send from. 
    // For testing/onboarding, use onboarding@resend.dev
    const fromAddress = env.FROM_EMAIL.includes("gmail.com") 
      ? "onboarding@resend.dev" 
      : env.FROM_EMAIL;

    const [agencyRes, userRes] = await Promise.all([
      resend.emails.send({
        from: `Yfeey Contact <${fromAddress}>`,
        to: [env.CONTACT_EMAIL],
        subject: `New Contact: ${escSubject}`,
        replyTo: escEmail,
        html: `
          <div style="font-family: sans-serif; padding: 24px;">
            <h2>New Inquiry</h2>
            <p><strong>Name:</strong> ${escName}</p>
            <p><strong>Email:</strong> ${escEmail}</p>
            <p><strong>Phone:</strong> ${escPhone}</p>
            <p><strong>Subject:</strong> ${escSubject}</p>
            <hr/>
            <p>${escMessage}</p>
          </div>
        `,
      }),

      resend.emails.send({
        from: `Yfeey <${fromAddress}>`,
        to: [escEmail],
        subject: "We've received your message!",
        html: `
          <div style="font-family: sans-serif; padding: 24px;">
            <h2>Hi ${escName},</h2>
            <p>
              Thanks for reaching out regarding 
              "<strong>${escSubject}</strong>".
            </p>
            <p>
              We'll respond within 24–48 business hours.
            </p>
            <br/>
            <p><strong>The Yfeey Team</strong></p>
          </div>
        `,
      }),
    ]);

    if (agencyRes.error || userRes.error) {
      console.error("Resend Agency Error:", agencyRes.error);
      console.error("Resend User Error:", userRes.error);
      return { 
        success: false, 
        error: "Email delivery failed. This is often due to an unverified sender address in Resend." 
      };
    }

    return { success: true };
  } catch (error) {
    console.error("Contact Action Error:", error);
    return { success: false, error: "Internal server error." };
  }
}