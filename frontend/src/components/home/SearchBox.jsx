import "../../styles/home.css";

function SearchBox() {
  return (
    <section className="search-section">
      <div className="container">

        <div className="search-card">

          <div className="search-field">
            <label>From</label>
            <input type="text" placeholder="New York" />
          </div>

          <div className="search-field">
            <label>To</label>
            <input type="text" placeholder="London" />
          </div>

          <div className="search-field">
            <label>Departure</label>
            <input type="date" />
          </div>

          <div className="search-field">
            <label>Return</label>
            <input type="date" />
          </div>

          <div className="search-field">
            <label>Travellers</label>
            <select>
              <option>1 Traveller</option>
              <option>2 Travellers</option>
              <option>3 Travellers</option>
            </select>
          </div>

          <button className="search-btn">
            Search Flights
          </button>

        </div>

      </div>
    </section>
  );
}

export default SearchBox;