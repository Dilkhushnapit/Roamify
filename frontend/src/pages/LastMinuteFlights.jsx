import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import FlashDeals from "../components/lastMinute/FlashDeals";
import LastMinuteHero from "../components/lastMinute/LastMinuteHero";
import DestinationGrid from "../components/lastMinute/DestinationGrid";
import BookingWindow from "../components/lastMinute/BookingWindow";
import TravelTips from "../components/lastMinute/TravelTips";
import FAQ from "../components/lastMinute/FAQ";
import CTA from "../components/lastMinute/CTA";

import "../styles/lastMinute.css";

function LastMinuteFlights() {
  return (
    <>
      <Navbar />

      <LastMinuteHero />

      <FlashDeals />

      <DestinationGrid />

      <BookingWindow />

      <TravelTips />

      <FAQ />

      <CTA />

      <Footer />
    </>
  );
}

export default LastMinuteFlights;