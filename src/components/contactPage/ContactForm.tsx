"use client";

import React from "react";
import { Mail, Phone, MapPin, Send, ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

const ContactForm = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    subject: "AI Automation Inquiry",
    message: "",
  });
  const [status, setStatus] = React.useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = React.useState("");

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
        subject: "AI Automation Inquiry",
        message: "",
      });
    } catch (error: any) {
      console.error(error);
      setStatus("error");
      setErrorMessage(error.message || "Something went wrong. Please try again.");
    }
  };

  return (
    <section className="bg-deep-midnight relative overflow-hidden">
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-20">
          {/* Contact Info */}
          <div className="space-y-12">
            <div>
              <h2 className="text-white mb-8">Contact Information</h2>
              <p className="text-gray-400 max-w-md">
                Reach out to us directly for immediate inquiries or visit one of
                our offices.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-white/5 border border-white/10 flex items-center justify-center text-primary">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-1">
                    Email Us
                  </p>
                  <p className="text-white font-medium">hello@yfeey.com</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-white/5 border border-white/10 flex items-center justify-center text-primary">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-1">
                    Call Us
                  </p>
                  <p className="text-white font-medium">+234 812 3456 789</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-white/5 border border-white/10 flex items-center justify-center text-primary">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-1">
                    Visit Us
                  </p>
                  <p className="text-white font-medium">
                    Lagos Island, Lagos, Nigeria
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white/5 border border-white/10 p-6 md:p-16 backdrop-blur-xl relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] -z-10 rounded-full"></div>

            {status === "success" ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-6 py-12">
                <div className="w-20 h-20 bg-primary/20 text-primary rounded-full flex items-center justify-center">
                  <Send size={40} />
                </div>
                <div>
                  <h3 className="text-white text-2xl mb-2">Message Sent!</h3>
                  <p className="text-gray-400">
                    Thank you for reaching out. We'll get back to you shortly.
                  </p>
                </div>
                <Button onClick={() => setStatus("idle")} variant="outline">
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form className="space-y-8" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400">
                      Full Name
                    </label>
                    <input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      type="text"
                      placeholder="John Doe"
                      className="w-full bg-white/5 border border-white/10 p-4 text-white outline-none focus:border-primary/50 transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400">
                      Email Address
                    </label>
                    <input
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      type="email"
                      placeholder="john@example.com"
                      className="w-full bg-white/5 border border-white/10 p-4 text-white outline-none focus:border-primary/50 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400">
                    Subject
                  </label>
                  <div className="relative">
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 p-4 pr-12 text-white outline-none focus:border-primary/50 transition-colors appearance-none cursor-pointer"
                    >
                      <option className="bg-deep-midnight text-white">
                        AI Automation Inquiry
                      </option>
                      <option className="bg-deep-midnight text-white">
                        Custom Software Project
                      </option>
                      <option className="bg-deep-midnight text-white">
                        Branding & Visual Systems
                      </option>
                      <option className="bg-deep-midnight text-white">
                        General Inquiry
                      </option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
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
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell us about your project..."
                    className="w-full bg-white/5 border border-white/10 p-4 text-white outline-none focus:border-primary/50 transition-colors resize-none"
                  ></textarea>
                </div>

                {status === "error" && (
                  <p className="text-red-500 text-sm">{errorMessage}</p>
                )}

                <Button
                  withArrow
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full flex items-center justify-center gap-3"
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
