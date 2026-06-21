import React from "react";
import { FaPlane, FaLeaf } from "react-icons/fa";

function FlightResults({ results, isLoading, error, searchParams }) {
  if (isLoading) {
    return (
      <div className="results-section">
        <div className="container">
          <div className="loader-container">
            <div className="spinner"></div>
            <p>Searching for the best available flights...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="results-section">
        <div className="container">
          <div className="error-container">
            <h3>Unable to retrieve flights</h3>
            <p>{error}</p>
          </div>
        </div>
      </div>
    );
  }

  if (!results) {
    return null;
  }

  const { departure_id, arrival_id, outbound_date, adults, travel_class } = searchParams;
  
  // Extract top flights and other flights from backend structure
  const itineraries = results?.data?.data?.itineraries || results?.data?.itineraries;
  const topFlights = itineraries?.topFlights || [];
  const otherFlights = itineraries?.otherFlights || [];
  const allFlights = [...topFlights, ...otherFlights];

  const formatPrice = (price) => {
    if (typeof price === "number") {
      return `$${price.toLocaleString("en-US")}`;
    }
    return price || "Unavailable";
  };

  const getStopLabel = (stops) => {
    if (stops === 0) return "Non-stop";
    if (stops === 1) return "1 stop";
    return `${stops} stops`;
  };

  return (
    <div className="results-section" id="results-view">
      <div className="container">
        <div className="results-header">
          <div>
            <h2>Flight Search Results</h2>
            <p>
              Showing flights from <strong>{departure_id}</strong> to{" "}
              <strong>{arrival_id}</strong> on <strong>{outbound_date}</strong> (
              {adults} {adults === 1 ? "Traveller" : "Travellers"}, {travel_class.toLowerCase().replace("_", " ")})
            </p>
          </div>
          <span className="results-count">
            {allFlights.length} flights found
          </span>
        </div>

        {allFlights.length === 0 ? (
          <div className="error-container" style={{ background: "#f5f5f5", borderColor: "#ddd", color: "#333" }}>
            <h3>No flights found</h3>
            <p>We couldn't find any flights matching your criteria. Try adjusting your dates or airports.</p>
          </div>
        ) : (
          <div className="flights-list">
            {allFlights.map((flight, index) => {
              const mainFlight = flight.flights?.[0] || {};
              const airlineName = mainFlight.airline || "Airline";
              const flightNum = mainFlight.flight_number || "";
              const airlineLogo = flight.airline_logo || mainFlight.airline_logo;
              const departureTime = flight.departure_time;
              const arrivalTime = flight.arrival_time;
              const durationText = flight.duration?.text || `${flight.duration?.raw || 0} min`;
              
              // Carbon emission details
              const carbon = flight.carbon_emissions;
              const co2 = carbon?.CO2e;
              const diffPercent = carbon?.difference_percent;
              
              // Layover details
              const layovers = flight.layovers || [];
              const layoverText = layovers.map(l => `${l.city} (${l.airport_code})`).join(", ");

              return (
                <div key={index} className="flight-card">
                  <div className="flight-main-row">
                    {/* Airline Logo & Name */}
                    <div className="airline-info">
                      <div className="airline-logo-container">
                        {airlineLogo ? (
                          <img 
                            src={airlineLogo} 
                            alt={airlineName} 
                            className="airline-logo"
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.src = "https://www.gstatic.com/flights/airline_logos/70px/multi.png";
                            }}
                          />
                        ) : (
                          <FaPlane style={{ color: "var(--muted)", fontSize: "1.2rem" }} />
                        )}
                      </div>
                      <div className="airline-details">
                        <span className="airline-name">{airlineName}</span>
                        {flightNum && <span className="flight-number">{flightNum}</span>}
                      </div>
                    </div>

                    {/* Flight Timings */}
                    <div className="flight-timing-info">
                      <div className="timing-node">
                        <div className="timing-time">{departureTime?.split(" ")?.[1] || departureTime}</div>
                        <div className="timing-airport">{departure_id}</div>
                      </div>

                      <div className="flight-path">
                        <span className="flight-duration">{durationText}</span>
                        <div className="path-line-container">
                          <FaPlane className="path-airplane" style={{ transform: "rotate(90deg)" }} />
                        </div>
                        <span className={`flight-stops ${flight.stops === 0 ? "non-stop" : "has-stops"}`}>
                          {getStopLabel(flight.stops)}
                        </span>
                      </div>

                      <div className="timing-node">
                        <div className="timing-time">{arrivalTime?.split(" ")?.[1] || arrivalTime}</div>
                        <div className="timing-airport">{arrival_id}</div>
                      </div>
                    </div>

                    {/* Pricing & Selection */}
                    <div className="flight-price-booking">
                      {flight.price && flight.price !== "unavailable" ? (
                        <span className="flight-price">{formatPrice(flight.price)}</span>
                      ) : (
                        <span className="price-unavailable">Unavailable</span>
                      )}
                      <button 
                        className="book-btn"
                        onClick={() => alert(`Redirecting to booking details for ${airlineName} ${flightNum}...`)}
                      >
                        Select
                      </button>
                    </div>
                  </div>

                  {/* Carbon / Layover Details Row */}
                  {(co2 || layoverText || diffPercent !== null) && (
                    <div className="flight-details-row">
                      {layoverText ? (
                        <span className="layover-info">
                          Connection in: <strong>{layoverText}</strong>
                        </span>
                      ) : (
                        <span className="layover-info">Direct flight</span>
                      )}

                      {co2 && (
                        <span className={`carbon-badge ${(diffPercent !== null && diffPercent > 0) ? "high-emissions" : ""}`}>
                          <FaLeaf size={12} />
                          {co2 / 1000} kg CO2e 
                          {diffPercent !== null && (
                            <span> ({diffPercent > 0 ? "+" : ""}{diffPercent}% emissions)</span>
                          )}
                        </span>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default FlightResults;
