"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { Menu, X } from "lucide-react";
import { Button } from "../ui/button";

const navItems = [
  { name: "About", href: "/about" },
  { name: "Services", href: "/#services" },
  { name: "Works", href: "/works" },
];

const Navbar = () => {
  const headerRef = useRef<HTMLElement>(null);
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  /* ---------------- SCROLL LOCK ---------------- */
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  /* ---------------- OPTIMIZED SCROLL ANIMATION ---------------- */
  useEffect(() => {
    if (!headerRef.current) return;

    const header = headerRef.current;

    // GPU optimization
    gsap.set(header, { willChange: "transform" });

    // Create ONE reusable tween
    const hideTween = gsap.to(header, {
      yPercent: -100,
      duration: 0.25,
      ease: "power2.out",
      paused: true,
    });

    let lastScroll = window.scrollY;

    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScroll && currentScroll > 80) {
        hideTween.play();
      } else {
        hideTween.reverse();
      }

      lastScroll = currentScroll;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      hideTween.kill();
    };
  }, []);

  /* ---------------- ENTRANCE ANIMATION ---------------- */
  useEffect(() => {
    if (!headerRef.current) return;

    gsap.from(".nav-reveal", {
      y: -10,
      opacity: 0,
      duration: 0.5,
      stagger: 0.05,
      ease: "power2.out",
    });
  }, []);

  const isActive = (path: string) => pathname === path;

  return (
    <>
      {/* ================= HEADER ================= */}
      <header
        ref={headerRef}
        className="fixed top-0 left-0 right-0 z-50 h-20 flex items-center glass-nav will-change-transform"
      >
        <div className="container mx-auto px-6 md:px-10 max-w-7xl flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group nav-reveal">
            <Image src="/images/Logo.png" width={60} height={60} alt="logo" />
            <span className="text-primary font-bold">YFEEY</span>
          </Link>
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-10">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-semibold font-display nav-reveal transition-colors ${
                  isActive(item.href)
                    ? "text-primary"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-4 nav-reveal">
            <Link href="/contact" className="hidden md:block">
              <Button size="sm">Contact Us</Button>
            </Link>

            <button
              className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
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
        className={`fixed inset-0 z-[60] bg-deepMidnight transition-transform duration-300 ease-out md:hidden ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Top Bar */}
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <Link href="/" className="flex items-center">
              <Image src="/images/Logo.png" width={60} height={60} alt="logo" />
              <span className="text-primary font-bold">YFEEY</span>
            </Link>

            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto p-8 space-y-10">
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold mb-4">
                Navigation
              </p>

              <ul className="space-y-5">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`text-2xl font-display block ${
                        isActive(item.href)
                          ? "text-primary"
                          : "text-white/80 hover:text-white"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          {/* Bottom CTA */}
          <div className="p-8 border-t border-white/10">
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
              <Button size="lg" className="w-full">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;