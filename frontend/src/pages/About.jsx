import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

import AboutHero from "../components/about/AboutHero";
import WhoWeAre from "../components/about/WhoWeAre";
import Stats from "../components/about/Stats";
import Mission from "../components/about/Mission";
import Values from "../components/about/Values";
import Timeline from "../components/about/Timeline";
import Team from "../components/about/Team";
import CTA from "../components/about/CTA";

function About() {
  return (
    <>
      <Navbar />

      <AboutHero />

      <WhoWeAre />

      <Stats />

      <Mission />

      <Values />

      <Timeline />

      <CTA />

      <Footer />
    </>
  );
}

export default About;