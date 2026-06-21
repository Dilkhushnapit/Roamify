import React, { useState } from "react";
import "../../styles/home.css";

function SearchBox({ onSearch, isLoading }) {
  const [departure, setDeparture] = useState("DEL");
  const [arrival, setArrival] = useState("BOM");
  const [departureDate, setDepartureDate] = useState("2026-07-15");
  const [travelClass, setTravelClass] = useState("ECONOMY");
  const [adults, setAdults] = useState("1");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!departure || !arrival || !departureDate) {
      alert("Please fill in departure, arrival and date fields.");
      return;
    }
    onSearch({
      departure_id: departure.toUpperCase().trim(),
      arrival_id: arrival.toUpperCase().trim(),
      outbound_date: departureDate,
      travel_class: travelClass,
      adults: parseInt(adults, 10),
    });
  };

  return (
    <section className="search-section">
      <div className="container">
        <form onSubmit={handleSubmit} className="search-card">
          <div className="search-field">
            <label>From (IATA Code)</label>
            <input 
              type="text" 
              placeholder="e.g. DEL" 
              value={departure}
              onChange={(e) => setDeparture(e.target.value)}
              required
            />
          </div>

          <div className="search-field">
            <label>To (IATA Code)</label>
            <input 
              type="text" 
              placeholder="e.g. BOM" 
              value={arrival}
              onChange={(e) => setArrival(e.target.value)}
              required
            />
          </div>

          <div className="search-field">
            <label>Departure</label>
            <input 
              type="date" 
              value={departureDate}
              onChange={(e) => setDepartureDate(e.target.value)}
              required
            />
          </div>

          <div className="search-field font-travellers">
            <label>Class</label>
            <select value={travelClass} onChange={(e) => setTravelClass(e.target.value)}>
              <option value="ECONOMY">Economy</option>
              <option value="PREMIUM_ECONOMY">Premium Economy</option>
              <option value="BUSINESS">Business</option>
              <option value="FIRST">First</option>
            </select>
          </div>

          <div className="search-field font-travellers">
            <label>Travellers</label>
            <select value={adults} onChange={(e) => setAdults(e.target.value)}>
              <option value="1">1 Traveller</option>
              <option value="2">2 Travellers</option>
              <option value="3">3 Travellers</option>
              <option value="4">4 Travellers</option>
              <option value="5">5 Travellers</option>
            </select>
          </div>

          <button type="submit" className="search-btn" disabled={isLoading}>
            {isLoading ? "Searching..." : "Search"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default SearchBox;