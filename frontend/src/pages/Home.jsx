import React from "react";
import { useFlights } from "../context/FlightContext";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

import Hero from "../components/home/Hero";
import SearchBox from "../components/home/SearchBox";
import FlightResults from "../components/home/FlightResults";
import TrustStrip from "../components/home/TrustStrip";
import Destinations from "../components/home/Destinations";
import Deals from "../components/home/Deals";

function Home() {
  const { flights, isLoading, error, searchParams, searchFlights } = useFlights();

  return (
    <>
      <Navbar />

      <Hero />

      <SearchBox onSearch={searchFlights} isLoading={isLoading} />

      {(isLoading || error || flights) && (
        <FlightResults 
          results={flights} 
          isLoading={isLoading} 
          error={error} 
          searchParams={searchParams} 
        />
      )}

      <TrustStrip />

      <Destinations />
      <Deals />

      <Footer />
    </>
  );
}

export default Home;