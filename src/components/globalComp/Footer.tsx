import React from "react";
import Link from "next/link";
import { Twitter, Linkedin, Instagram, Youtube } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Works", href: "/works" },
  { name: "Services", href: "/#services" },
  { name: "Contact us", href: "/contact" },
];

const socialLinks = [
  { Icon: Twitter, href: "#", label: "Twitter" },
  { Icon: Instagram, href: "#", label: "Instagram" },
  { Icon: Linkedin, href: "#", label: "LinkedIn" },
  { Icon: Youtube, href: "#", label: "YouTube" },
];

const legalLinks = [
  { name: "Terms & Conditions", href: "#" },
  { name: "Privacy Policy", href: "#" },
];

const Footer = () => {
  return (
    <footer
      className="bg-deep-midnight text-white pt-24 pb-12 overflow-hidden"
      id="testimonials"
    >
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 mb-20 text-center md:text-left">
          {/* Navigation Links */}
          <div className="space-y-4">
            <ul className="flex flex-col gap-3 text-sm font-medium text-white/70">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social and Contact Info */}
          <div className="flex flex-col items-center gap-6">
            <div className="text-center">
              <h4 className="text-sm font-medium text-white/60 mb-4">
                Follow us
              </h4>
              <p className="text-sm text-white/80 mb-1">hello@yfeey.com</p>
              <p className="text-sm text-white/80">+234 812 3456 789</p>
            </div>

            <div className="flex gap-3">
              {socialLinks.map(({ Icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all group"
                  aria-label={label}
                >
                  <Icon
                    size={18}
                    className="text-white/70 group-hover:text-white"
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* Address */}
          <div className="md:text-right space-y-4">
            <h4 className="text-sm font-medium text-white/60">Address</h4>
            <div className="text-sm text-white/70 leading-relaxed">
              <p>Lagos Island,</p>
              <p>Lagos State,</p>
              <p>Nigeria</p>
            </div>
          </div>
        </div>

        {/* Middle Bar: Legal */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 py-8 border-t border-white/5 text-xs font-medium text-white/40 tracking-wider uppercase">
          <p>© 2026 YFEEY. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-12">
            {legalLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom Section: Branding */}
        <div className="mt-8 select-none text-center pointer-events-none">
          <h1 className="text-[15vw] md:text-[20vw] font-display font-black leading-[0.8] text-white tracking-[-0.05em] uppercase opacity-[0.95]">
            Yfeey
          </h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
