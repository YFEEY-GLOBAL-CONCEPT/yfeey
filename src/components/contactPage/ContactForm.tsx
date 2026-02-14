"use client";

import React from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "../ui/button";

const ContactForm = () => {
  return (
    <section className="py-24 bg-deep-midnight relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
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
                <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
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
                <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
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
                <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
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
          <div className="bg-white/5 border border-white/10 p-10 md:p-16 rounded-3xl backdrop-blur-xl relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] -z-10 rounded-full"></div>

            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/10 p-4 rounded-xl text-white outline-none focus:border-primary/50 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full bg-white/5 border border-white/10 p-4 rounded-xl text-white outline-none focus:border-primary/50 transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400">
                  Subject
                </label>
                <select className="w-full bg-white/5 border border-white/10 p-4 rounded-xl text-white outline-none focus:border-primary/50 transition-colors appearance-none">
                  <option>AI Automation Inquiry</option>
                  <option>Custom Software Project</option>
                  <option>Branding & Visual Systems</option>
                  <option>General Inquiry</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400">
                  Your Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Tell us about your project..."
                  className="w-full bg-white/5 border border-white/10 p-4 rounded-xl text-white outline-none focus:border-primary/50 transition-colors resize-none"
                ></textarea>
              </div>

              <Button
                size="lg"
                className="w-full rounded-xl flex items-center justify-center gap-3"
              >
                Send Message
                <Send size={18} />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
