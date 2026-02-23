
import ContactHero from "@/components/contactPage/ContactHero";
import ContactForm from "@/components/contactPage/ContactForm";

export const metadata = {
  title: "Contact Us",
  description:
    "Ready to automate the future? Get in touch with Yfeey to start your next project in AI automation, custom software, or digital systems.",
  openGraph: {
    title: "Connect with Yfeey - Start Your Project",
    description: "Reach out to discuss how we can help you engineer significant impact through technology.",
    url: "https://yfeey.com/contact",
  },
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
