"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
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
  { name: "Blogs", href: "#" },
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

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  useGSAP(
    () => {
      // Scroll animation
      gsap.to(headerRef.current, {
        backgroundColor: "rgba(14, 17, 24, 0.95)",
        height: "72px",
        scrollTrigger: {
          start: "top -20px",
          toggleActions: "play none none reverse",
        },
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
      <header
        ref={headerRef}
        className="fixed top-0 left-0 right-0 z-50 glass-nav h-20 flex items-center transition-all duration-300"
      >
        <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group nav-reveal">
            <div className="text-white flex group-hover:scale-110 transition-transform duration-300">
              <Hexagon className="w-8 h-8 fill-primary stroke-primary" />
            </div>
            <span className="font-display text-card-title text-white">
              Yfeey
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-semibold transition-colors font-display nav-reveal ${
                  isActive(item.href)
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            ))}

            <div className="relative services-dropdown group nav-reveal">
              <button className="text-sm font-semibold text-gray-400 hover:text-white transition-colors font-display flex items-center gap-1">
                Services
                <ChevronDown className="w-4 h-4 opacity-70 group-hover:rotate-180 transition-transform" />
              </button>
              <div className="dropdown-content group-hover:block animate-in fade-in slide-in-from-top-2 duration-300">
                <div className="flex flex-col gap-1">
                  {services.map((service) => (
                    <Link
                      key={service}
                      href="/#services"
                      className="text-xs px-4 py-3 dark-link-hover rounded-lg text-gray-300 font-medium transition-colors"
                    >
                      {service}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4 nav-reveal">
            <Button
              href="/contact"
              size="sm"
              className="hidden md:flex rounded-full"
            >
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

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed inset-0 z-[60] bg-deep-midnight transition-transform duration-500 ease-in-out md:hidden ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-6 border-b border-white/5">
            <Link href="/" className="flex items-center gap-3">
              <Hexagon className="w-8 h-8 fill-primary stroke-primary" />
              <span className="font-display text-lg text-white font-bold">
                Yfeey
              </span>
            </Link>
            <button
              className="text-white p-2 hover:bg-white/5 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto p-8 space-y-8">
            <div className="space-y-4">
              <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold">
                Navigation
              </p>
              <ul className="space-y-4">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className={`text-2xl font-display font-medium block ${
                        isActive(item.href) ? "text-primary" : "text-white"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4 pt-8 border-t border-white/5">
              <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold">
                Services
              </p>
              <ul className="space-y-4">
                {services.map((service) => (
                  <li key={service}>
                    <Link
                      href="/#services"
                      className="text-lg text-white/70 hover:text-white transition-colors flex items-center justify-between group"
                    >
                      {service}
                      <ArrowRight
                        size={16}
                        className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          <div className="p-8 border-t border-white/5">
            <Button href="/contact" size="lg" className="w-full rounded-2xl">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
