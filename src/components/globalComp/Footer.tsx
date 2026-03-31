import React from "react";
import Link from "next/link";
import { Linkedin, Instagram, MessageCircle } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Works", href: "/works" },
  { name: "Services", href: "/#services" },
  { name: "Blog", href: "/blog" },
  { name: "Contact us", href: "/contact" },
];

const socialLinks = [
  { Icon: Linkedin, href: "https://www.linkedin.com/company/yfeey/", label: "LinkedIn" },
  { Icon: Instagram, href: "https://www.instagram.com/yfeey_official/", label: "Instagram" },
  { Icon: MessageCircle, href: "https://wa.me/2348032368560", label: "WhatsApp" },
];

// const legalLinks = [
//   { name: "Terms & Conditions", href: "#" },
//   { name: "Privacy Policy", href: "#" },
// ];

const Footer = () => {
  return (
    <footer
      className="bg-deepMidnight text-white pt-24 pb-12 overflow-hidden border-t border-white/5"
      id="testimonials"
    >
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-12 mb-20">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-2 group w-fit">
              <Image src="/images/Logo.png" width={50} height={50} alt="logo" />
              <span className="text-2xl font-bold tracking-tight">YFEEY</span>
            </Link>
            <p className="text-white text-lg max-w-sm leading-relaxed">
              Engineering outcomes through precise, scalable, and inherently logical systems.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="space-y-6">
            <h4 className="text-xs font-bold uppercase tracking-widest text-primary">
              Site Map
            </h4>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social and Contact Info */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-primary">
                Let&apos;s Talk
              </h4>
              <div className="space-y-3">
                <p className="text-lg font-medium">info@yfeey.com</p>
                <div className="text-white space-y-1">
                  <p>Isle of Man</p>
                  <p>Nigeria</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              {socialLinks.map(({ Icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center hover:bg-primary/20 hover:border-primary/30 transition-all duration-300 group"
                  aria-label={label}
                >
                  <Icon
                    size={20}
                    className="text-white group-hover:text-primary"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Middle Bar: Legal */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 py-12 border-t border-white/5 text-[10px] font-bold tracking-[0.2em] text-white">
          <p>© 2026 YFEEY. All right reserved.</p>
          {/* <div className="flex gap-8">
            {legalLinks?.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div> */}
        </div>

        {/* Bottom Section: Branding */}
        <div className="mt-12 select-none text-center pointer-events-none">
          <h1 className="text-[20vw] font-display font-black leading-none text-white tracking-tighter uppercase">
            Yfeey
          </h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
