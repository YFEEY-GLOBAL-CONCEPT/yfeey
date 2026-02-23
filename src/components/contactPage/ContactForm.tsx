"use client";

import React, { useState } from "react";
import { Mail, Phone, Send } from "lucide-react";
import { Button } from "../ui/button";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "AI Automation Inquiry",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "AI Automation Inquiry",
        message: "",
      });
    } catch (error: unknown) {
      console.error(error);
      setStatus("error");
      const message = error instanceof Error ? error.message : "Something went wrong. Please try again.";
      setErrorMessage(message);
    }
  };

  return (
    <section className="bg-primary relative overflow-hidden py-24">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          {/* Contact Info */}
          <div className="space-y-12 text-center lg:text-left">
            <div>
              <h2 className="text-white mb-8 text-3xl md:text-5xl lg:text-7xl">Contact Information</h2>
              <p className="text-white/70 max-w-md mx-auto lg:mx-0 text-lg">
                Reach out to us directly for immediate inquiries. We are here to help you engineer significant impact.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8 md:gap-12 lg:gap-8">
              <div className="flex items-center gap-6 group justify-center lg:justify-start">
                <div className="w-14 h-14 bg-white/10 border border-white/20 flex items-center justify-center text-white shrink-0">
                  <Mail size={24} />
                </div>
                <div className="text-left">
                  <p className="text-xs text-white/50 uppercase tracking-widest font-bold mb-1">
                    Email Us
                  </p>
                  <p className="text-white font-medium">info@yfeey.com</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group justify-center lg:justify-start">
                <div className="w-14 h-14 bg-white/10 border border-white/20 flex items-center justify-center text-white shrink-0">
                  <Phone size={24} />
                </div>
                <div className="text-left">
                  <p className="text-xs text-white/50 uppercase tracking-widest font-bold mb-1">
                    Call Us
                  </p>
                  <div className="space-y-1">
                    <p className="text-white font-medium whitespace-nowrap">+234 8032368560 (WhatsApp)</p>
                    <p className="text-white font-medium">+44 624 403102</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white/10 border border-white/10 p-6 md:p-10 lg:p-16 backdrop-blur-xl relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 blur-[100px] -z-10 rounded-full"></div>

            {status === "success" ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-6 py-12">
                <div className="w-20 h-20 bg-white/20 text-white rounded-full flex items-center justify-center">
                  <Send size={40} />
                </div>
                <div>
                  <h3 className="text-white text-2xl mb-2">Message Sent!</h3>
                  <p className="text-white/70">
                    Thank you for reaching out. We&apos;ll get back to you shortly.
                  </p>
                </div>
                <Button onClick={() => setStatus("idle")} variant="outline" className="text-white border-white/20 hover:bg-white/10">
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form className="space-y-8" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-white/60">
                      Full Name
                    </label>
                    <input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      type="text"
                      placeholder="John Doe"
                      className="w-full bg-white/5 border border-white/10 p-4 text-white outline-none focus:border-white/50 transition-colors placeholder:text-white/20"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-white/60">
                      Email Address
                    </label>
                    <input
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      type="email"
                      placeholder="john@example.com"
                      className="w-full bg-white/5 border border-white/10 p-4 text-white outline-none focus:border-white/50 transition-colors placeholder:text-white/20"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-white/60">
                      Phone Number
                    </label>
                    <input
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      type="tel"
                      placeholder="+234..."
                      className="w-full bg-white/5 border border-white/10 p-4 text-white outline-none focus:border-white/50 transition-colors placeholder:text-white/20"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-white/60">
                    Subject
                  </label>
                  <div className="relative">
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 p-4 pr-12 text-white outline-none focus:border-white/50 transition-colors appearance-none cursor-pointer"
                    >
                      <option className="bg-primary text-white">
                        AI Automation Inquiry
                      </option>
                      <option className="bg-primary text-white">
                        Custom Software Project
                      </option>
                      <option className="bg-primary text-white">
                        Branding & Visual Systems
                      </option>
                      <option className="bg-primary text-white">
                        General Inquiry
                      </option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white/40">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-white/60">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell us about your project..."
                    className="w-full bg-white/5 border border-white/10 p-4 text-white outline-none focus:border-white/50 transition-colors resize-none placeholder:text-white/20"
                  ></textarea>
                </div>

                {status === "error" && (
                  <p className="text-red-200 text-sm font-medium">{errorMessage}</p>
                )}

                <Button
                  withArrow
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full flex items-center justify-center gap-3 bg-white text-primary hover:bg-white/90"
                >
                  {status === "loading" ? "Sending..." : "Send Message"}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
