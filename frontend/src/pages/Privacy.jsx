import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

import PrivacyHero from "../components/privacy/PrivacyHero";
import PrivacySidebar from "../components/privacy/PrivacySidebar";
import PrivacyContent from "../components/privacy/PrivacyContent";

import "../styles/privacy.css";

function Privacy() {
  return (
    <>
      <Navbar />

      <PrivacyHero />

      <section className="privacy-layout container">

        <PrivacySidebar />

        <PrivacyContent />

      </section>

      <Footer />
    </>
  );
}

export default Privacy;