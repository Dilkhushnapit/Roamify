import React, { createContext, useState, useContext } from "react";
import axios from "axios";

const FlightContext = createContext();

export const FlightProvider = ({ children }) => {
  const [flights, setFlights] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useState(null);

  const searchFlights = async (params) => {
    setIsLoading(true);
    setError(null);
    setFlights(null);
    setSearchParams(params);

    try {
      const response = await axios.get("http://localhost:5001/api/flights/search", {
        params: {
          departure_id: params.departure_id,
          arrival_id: params.arrival_id,
          outbound_date: params.outbound_date,
          travel_class: params.travel_class,
          adults: params.adults,
        },
      });

      if (response.data?.success) {
        setFlights(response.data);
        // Scroll to results smoothly after a short delay to allow rendering
        setTimeout(() => {
          document.getElementById("results-view")?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        setError("Failed to retrieve flight data from the server.");
      }
    } catch (err) {
      console.error("Flight Search Error in Context:", err);
      const errMsg = err.response?.data?.message || err.message || "An unexpected error occurred.";
      setError(errMsg);
    } finally {
      setIsLoading(false);
    }
  };

  const clearSearch = () => {
    setFlights(null);
    setError(null);
    setSearchParams(null);
  };

  return (
    <FlightContext.Provider
      value={{
        flights,
        isLoading,
        error,
        searchParams,
        searchFlights,
        clearSearch,
      }}
    >
      {children}
    </FlightContext.Provider>
  );
};

export const useFlights = () => {
  const context = useContext(FlightContext);
  if (!context) {
    throw new Error("useFlights must be used within a FlightProvider");
  }
  return context;
};
