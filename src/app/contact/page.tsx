import React from "react";
import Navbar from "@/components/globalComp/Navbar";
import Footer from "@/components/globalComp/Footer";
import ContactHero from "@/components/contactPage/ContactHero";
import ContactForm from "@/components/contactPage/ContactForm";

export const metadata = {
  title: "Contact Us - Yfeey Studio",
  description:
    "Get in touch with Yfeey to start your next project in AI automation, software development, or branding.",
};

const ContactPage = () => {
  return (
    <main className="min-h-screen bg-deep-midnight">
      <Navbar />
      <ContactHero />
      <ContactForm />
      <Footer />
    </main>
  );
};

export default ContactPage;
