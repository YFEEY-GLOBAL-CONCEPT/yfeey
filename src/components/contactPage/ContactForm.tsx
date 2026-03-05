"use client";

import React, { useState } from "react";
import { Mail, Phone, Send, MapPin } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../ui/button";
import { sendContactEmail } from "@/app/actions/sendContactEmail";
import { contactSchema, type ContactFormData } from "@/lib/validations/contact";

const ContactForm = () => {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: "onBlur",
    reValidateMode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "AI Automation Inquiry",
      message: "",
      company: "",
    },
  });

  const messageValue = watch("message") || "";

  const onSubmit = async (data: ContactFormData) => {
    setStatus("loading");
    setErrorMessage("");

    try {
      const result = await sendContactEmail(data);

      if (!result.success) {
        throw new Error(result.error);
      }

      setStatus("success");
      reset();
    } catch (error: unknown) {
      console.error(error);
      setStatus("error");
      const message =
        error instanceof Error ? error.message : "Something went wrong. Please try again.";
      setErrorMessage(message);
    }
  };


  return (
    <section className="bg-primary-dark relative overflow-hidden py-24">
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

              <div className="flex items-center gap-6 group justify-center lg:justify-start">
                <div className="w-14 h-14 bg-white/10 border border-white/20 flex items-center justify-center text-white shrink-0">
                  <MapPin size={24} />
                </div>
                <div className="text-left">
                  <p className="text-xs text-white/50 uppercase tracking-widest font-bold mb-1">
                    Our Locations
                  </p>
                  <div className="space-y-1">
                    <p className="text-white font-medium">Isle of Man</p>
                    <p className="text-white font-medium">Nigeria</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white border border-white/50 p-6 backdrop-blur-xl relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 blur-[100px] -z-10 rounded-full"></div>

            {status === "success" ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-6 py-12">
                <div className="w-20 h-20 bg-white/20 text-white rounded-full flex items-center justify-center">
                  <Send size={40} />
                </div>
                <div>
                  <h3 className="text-primary text-2xl mb-2">Message Sent!</h3>
                  <p className="text-primary/70">
                    Thank you for reaching out. We&apos;ll get back to you shortly.
                  </p>
                </div>
                <Button onClick={() => setStatus("idle")} variant="outline" className="text-primary border-primary/20 hover:bg-primary/10">
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form id="contact" className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
                {/* Honeypot field (hidden) */}
                <div className="hidden">
                  <label>Company</label>
                  <input
                    {...register("company")}
                    autoComplete="off"
                    tabIndex={-1}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-primary">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      {...register("name")}
                      type="text"
                      placeholder="John Doe"
                      className={`w-full bg-primary/30 border ${
                        errors.name ? "border-red-500" : "border-primary/70"
                      } p-4 text-black outline-none focus:border-primary/50 transition-colors placeholder:text-black/20`}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-[10px] mt-1 italic">{errors.name.message}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-primary">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      {...register("email")}
                      type="email"
                      placeholder="john@example.com"
                      className={`w-full bg-primary/30 border ${
                        errors.email ? "border-red-500" : "border-primary/70"
                      } p-4 text-black outline-none focus:border-primary/50 transition-colors placeholder:text-black/20`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-[10px] mt-1 italic">{errors.email.message}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-primary">
                      Phone Number
                    </label>
                    <input
                      {...register("phone")}
                      type="tel"
                      placeholder="+234..."
                      maxLength={20}
                      onInput={(e) => {
                        e.currentTarget.value = e.currentTarget.value.replace(/[^0-9\s\-()+]/g, "");
                      }}
                      className={`w-full bg-primary/30 border ${
                        errors.phone ? "border-red-500" : "border-primary/70"
                      } p-4 text-black outline-none focus:border-primary/50 transition-colors placeholder:text-black/20`}
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-[10px] mt-1 italic">{errors.phone.message}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-primary">
                    Subject
                  </label>
                  <div className="relative">
                    <select
                      {...register("subject")}
                      className="w-full bg-primary/30 border border-primary/70 p-4 pr-12 text-black outline-none focus:border-primary/50 transition-colors appearance-none cursor-pointer"
                    >
                      <option className="bg-primary/30 text-black">
                        AI Automation Inquiry
                      </option>
                      <option className="bg-primary/30 text-black">
                        Custom Software Project
                      </option>
                      <option className="bg-primary/30 text-black">
                        Branding & Visual Systems
                      </option>
                      <option className="bg-primary/30 text-black">
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
                  {errors.subject && (
                    <p className="text-red-500 text-xs mt-1">{errors.subject.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <label className="text-xs font-bold uppercase tracking-widest text-primary">
                      Your Message <span className="text-red-500">*</span>
                    </label>
                    <span className={`text-[10px] font-medium ${messageValue.length > 2000 ? "text-red-500 font-bold" : "text-primary/50"}`}>
                      {messageValue.length}/2000
                    </span>
                  </div>
                  <textarea
                    {...register("message")}
                    rows={5}
                    placeholder="Tell us about your project..."
                    className={`w-full bg-primary/30 border ${
                      errors.message ? "border-red-500" : "border-primary/70"
                    } p-4 text-black outline-none focus:border-primary/50 transition-colors resize-none placeholder:text-black/30`}
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
                  )}
                </div>


                {status === "error" && (
                  <p className="text-red-500 text-sm font-medium">{errorMessage}</p>
                )}

                <Button
                  withArrow
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full flex items-center justify-center gap-3 text-white bg-primary hover:bg-primary-dark"
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

