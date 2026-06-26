import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

import ContactHero from "../components/contact/ContactHero";
import ContactChannels from "../components/contact/ContactChannels";
import ContactForm from "../components/contact/ContactForm";
import ContactSidebar from "../components/contact/ContactSidebar";
import FAQ from "../components/contact/FAQ";
import ContactCTA from "../components/contact/ContactCTA";

import "../styles/contact.css";

function Contact() {
  return (
    <>
      <Navbar />

      <ContactHero />

      <ContactChannels />

      <section className="contact-layout container">

        <ContactForm />

        <ContactSidebar />

      </section>

      <FAQ />

      <ContactCTA />

      <Footer />
    </>
  );
}

export default Contact;