import "../../styles/home.css";

function Destinations() {
  return (
    <section className="destinations section">

      <div className="container">

        <div className="section-header">
          <h2>Popular Destinations</h2>

          <p>
            Discover the world's most loved travel destinations.
          </p>
        </div>

        <div className="destination-grid">

          <div className="destination-card">
            <img
              src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c"
              alt="Dubai"
            />
            <div className="destination-content">
              <h3>Dubai</h3>
              <p>Starting from $399</p>
            </div>
          </div>

          <div className="destination-card">
            <img
              src="https://images.unsplash.com/photo-1528181304800-259b08848526"
              alt="Thailand"
            />
            <div className="destination-content">
              <h3>Thailand</h3>
              <p>Starting from $299</p>
            </div>
          </div>

          <div className="destination-card">
            <img
              src="https://images.unsplash.com/photo-1508964942454-1a56651d54ac"
              alt="Singapore"
            />
            <div className="destination-content">
              <h3>Singapore</h3>
              <p>Starting from $449</p>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Destinations;