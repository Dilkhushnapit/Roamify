import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

import Hero from "../components/home/Hero";
import SearchBox from "../components/home/SearchBox";
import TrustStrip from "../components/home/TrustStrip";
import Destinations from "../components/home/Destinations";
import Deals from "../components/home/Deals";

function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <SearchBox />

      <TrustStrip />

      <Destinations />
      <Deals />

      <Footer />
    </>
  );
}

export default Home;