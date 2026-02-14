import type { Metadata } from "next";
import { Poppins, Literata } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/globalComp/Navbar";
import Footer from "@/components/globalComp/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

const literata = Literata({
  subsets: ["latin"],
  variable: "--font-literata",
});

export const metadata: Metadata = {
  title: "Yfeey - Intelligent Automation",
  description:
    "Digital agency focused on software, intelligent automation, and AI-driven systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${poppins.variable} ${literata.variable} font-body antialiased overflow-x-hidden`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
