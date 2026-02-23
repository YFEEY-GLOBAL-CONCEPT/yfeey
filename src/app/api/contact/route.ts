import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, phone, subject, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    const agencyEmail = resend.emails.send({
      from: "Yfeey Contact Form <info@yfeey.com>",
      to: [process.env.CONTACT_EMAIL || "info@yfeey.com"],
      subject: `New Contact Form Submission: ${subject || "General Inquiry"}`,
      replyTo: email,
      html: `
        <div style="font-family: sans-serif; background-color: #0e1118; color: #ffffff; padding: 40px; border-radius: 8px;">
          <h2 style="color: #8062c0; margin-bottom: 24px;">New Inquiry Received</h2>
          <div style="background-color: rgba(255,255,255,0.05); padding: 24px; border-radius: 4px; border: 1px solid rgba(255,255,255,0.1);">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <div style="margin-top: 24px; padding-top: 24px; border-top: 1px solid rgba(255,255,255,0.1);">
              <p><strong>Message:</strong></p>
              <p style="white-space: pre-wrap; line-height: 1.6; color: #d1d5db;">${message}</p>
            </div>
          </div>
          <p style="margin-top: 40px; font-size: 12px; color: #6b7280; text-align: center;">Sent from Yfeey Agency Website</p>
        </div>
      `,
    });

    const userConfirmation = resend.emails.send({
      from: "Yfeey <info@yfeey.com>",
      to: [email],
      subject: "We've received your message!",
      html: `
        <div style="font-family: sans-serif; background-color: #ffffff; color: #1f2937; padding: 40px; border-radius: 8px; border: 1px solid #e5e7eb;">
          <div style="margin-bottom: 32px; text-align: center;">
             <h1 style="color: #0e1118; font-size: 24px; margin: 0;">Yfeey</h1>
          </div>
          <h2 style="color: #8062c0; margin-bottom: 20px;">Hi ${name},</h2>
          <p style="line-height: 1.6; margin-bottom: 16px;">
            Thank you for reaching out to Yfeey! We've received your message regarding <strong>"${subject || "General Inquiry"}"</strong>.
          </p>
          <p style="line-height: 1.6; margin-bottom: 24px;">
            Our team is already reviewing your details. We strive to respond to all inquiries within <strong>24-48 business hours</strong>.
          </p>
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 4px; border-left: 4px solid #8062c0; margin-bottom: 32px;">
            <p style="margin: 0; font-size: 14px; color: #6b7280; font-style: italic;">
              "Transforming Ideas into Scalable Systems."
            </p>
          </div>
          <p style="line-height: 1.6;">
            Best regards,<br />
            <strong>The Yfeey Team</strong>
          </p>
          <div style="margin-top: 40px; padding-top: 24px; border-top: 1px solid #e5e7eb; text-align: center; font-size: 12px; color: #9ca3af;">
            <p>© 2026 Yfeey. All rights reserved.</p>
          </div>
        </div>
      `,
    });

    const [agencyRes, userRes] = await Promise.all([agencyEmail, userConfirmation]);
    
    if (agencyRes.error || userRes.error) {
      console.error("Resend API error (Agency):", agencyRes.error);
      console.error("Resend API error (User):", userRes.error);
      return NextResponse.json(
        { 
          error: "Failed to send email", 
          details: agencyRes.error?.message || userRes.error?.message 
        },
        { status: 400 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact API Critical Error:", error);
    return NextResponse.json(
      { error: "Internal server error", details: error instanceof Error ? error.message : String(error) }, 
      { status: 500 }
    );
  }
}
