
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
      <ContactHero />
      <ContactForm />
    </main>
  );
};

export default ContactPage;
