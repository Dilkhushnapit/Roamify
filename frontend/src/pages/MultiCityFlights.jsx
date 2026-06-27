import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

import MultiCityHero from "../components/multiCity/MultiCityHero";
import MultiCityBuilder from "../components/multiCity/MultiCityBuilder";
import RouteCards from "../components/multiCity/RouteCards";
import TravelTips from "../components/multiCity/TravelTips";
import MultiCityFAQ from "../components/multiCity/MultiCityFAQ";
import MultiCityCTA from "../components/multiCity/MultiCityCTA";
import MultiCityFeatures from "../components/multiCity/MultiCityFeatures";

import "../styles/multiCity.css";

function MultiCityFlights() {

  return (

    <>

      <Navbar />

      <MultiCityHero />

      <MultiCityBuilder />

      <RouteCards />

      <MultiCityFeatures />

      <TravelTips />

      <MultiCityFAQ />

      <MultiCityCTA />

      <Footer />

    </>

  );

}

export default MultiCityFlights;