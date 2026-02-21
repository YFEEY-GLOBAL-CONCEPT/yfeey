"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Hexagon, ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

gsap.registerPlugin(ScrollTrigger);

const navItems = [
  { name: "About", href: "/about" },
  { name: "Works", href: "/works" },
  // { name: "Blog", href: "/blog" },
];

const services = [
  "AI & Intelligent Automation",
  "Custom Software Development",
  "Content & Growth Automation",
  "Tech Team Augmentation",
  "Branding & Visual Systems",
  "Training & Enablement",
];

const Navbar = () => {
  const headerRef = useRef<HTMLElement>(null);
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  /* ---------------- SCROLL LOCK ---------------- */
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  /* ---------------- GSAP ---------------- */
  useGSAP(
    () => {
      // Scroll-based header transform
      ScrollTrigger.create({
        start: "top -20",
        onEnter: () =>
          gsap.to(headerRef.current, {
            backgroundColor: "rgba(14, 17, 24, 0.95)",
            height: 72,
            duration: 0.3,
            ease: "power2.out",
          }),
        onLeaveBack: () =>
          gsap.to(headerRef.current, {
            backgroundColor: "transparent",
            height: 80,
            duration: 0.3,
            ease: "power2.out",
          }),
      });

      // Entrance animation
      gsap.from(".nav-reveal", {
        y: -10,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
      });
    },
    { scope: headerRef },
  );

  const isActive = (path: string) => pathname === path;

  return (
    <>
      {/* ================= HEADER ================= */}
      <header
        ref={headerRef}
        className="fixed top-0 left-0 right-0 z-50 h-20 flex items-center transition-all duration-300 backdrop-blur-md"
      >
        <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group nav-reveal">
            <Image src='/images/Logo.png' width={60} height={60} alt="logo"/> 
            <span className="text-primary font-bold"> YFEEY</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-semibold font-display nav-reveal transition-colors ${
                  isActive(item.href)
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            ))}

            {/* Services Dropdown */}
            <div className="relative group nav-reveal">
              <button className="text-sm font-semibold text-gray-400 hover:text-white transition-colors font-display flex items-center gap-1">
                Services
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </button>

              <div className="absolute top-full left-0  hidden group-hover:block">
                <div className="bg-deep-midnight border mt-6 border-white/5 shadow-xl py-2 w-64">
                  {services.map((service) => (
                    <Link
                      key={service}
                      href="/#services"
                      className="block text-xs px-4 py-3 text-gray-300 hover:bg-white/5 hover:text-white transition-colors"
                    >
                      {service}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-4 nav-reveal">
            <Button href="/contact" size="sm" className="hidden md:flex ">
              Contact Us
            </Button>

            <button
              className="md:hidden text-white p-2 hover:bg-white/5 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`fixed inset-0 z-60 bg-deep-midnight transition-transform duration-500 ease-in-out md:hidden ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Top Bar */}
          <div className="flex items-center justify-between p-6 border-b border-white/5">
            <Link href="/" className="flex items-center ">
              <Image src='/images/Logo.png' width={60} height={60} alt="logo"/> 
            <span className="text-primary font-bold"> YFEEY</span>
            </Link>

            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-white p-2 hover:bg-white/5 rounded-lg transition-colors"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto p-8 space-y-10">
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold mb-4">
                Navigation
              </p>

              <ul className="space-y-5">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`text-2xl font-display block ${
                        isActive(item.href) ? "text-primary" : "text-white"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-8 border-t border-white/5">
              <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold mb-4">
                Services
              </p>

              <ul className="space-y-4">
                {services.map((service) => (
                  <li key={service}>
                    <Link
                      href="/#services"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-between text-white/70 hover:text-white transition-colors group"
                    >
                      {service}
                      <ArrowRight
                        size={16}
                        className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          {/* Bottom CTA */}
          <div className="p-8 border-t border-white/5">
            <Button
              href="/contact"
              size="lg"
              className=""
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
