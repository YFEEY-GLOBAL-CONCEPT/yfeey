import { Suspense } from "react";
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
  metadataBase: new URL("https://yfeey.com"),
  title: {
    default: "Yfeey - Intelligent Automation & AI Software Studio",
    template: "%s | Yfeey",
  },
  description:
    "Yfeey is a premier digital agency specializing in intelligent automation, custom software, and AI-driven systems. We engineer sustainable growth through robust digital infrastructure.",
  keywords: [
    "AI Automation",
    "Custom Software Development",
    "Digital Agency",
    "System Architecture",
    "Intelligent Systems",
    "Business Automation",
    "Yfeey Studio",
  ],
  authors: [{ name: "Yfeey Team" }],
  creator: "Yfeey Studio",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yfeey.com",
    siteName: "Yfeey",
    title: "Yfeey - Intelligent Automation & AI Software Studio",
    description: "Engineering significant impact through people, technology, AI, and smart automation.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Yfeey - Intelligent Automation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yfeey - Intelligent Automation & AI Software Studio",
    description: "Engineering significant impact through people, technology, AI, and smart automation.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
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
        <Suspense>
          <Navbar />
        </Suspense>
        {children}
        <Footer />
      </body>
    </html>
  );
}
