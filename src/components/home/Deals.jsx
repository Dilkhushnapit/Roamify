import "../../styles/home.css";

function Deals() {
  return (
    <section className="deals section">

      <div className="container">

        <div className="section-header">
          <h2>Exclusive Flight Deals</h2>
          <p>
            Save more on your next trip with our best offers.
          </p>
        </div>

        <div className="deals-grid">

          <div className="deal-card">
            <span className="deal-badge">20% OFF</span>

            <h3>New York → Dubai</h3>

            <p>Limited time summer offer</p>

            <div className="deal-price">
              $399
            </div>
          </div>

          <div className="deal-card">
            <span className="deal-badge">15% OFF</span>

            <h3>London → Singapore</h3>

            <p>Weekend special deal</p>

            <div className="deal-price">
              $449
            </div>
          </div>

          <div className="deal-card">
            <span className="deal-badge">25% OFF</span>

            <h3>Delhi → Bangkok</h3>

            <p>Most booked route this month</p>

            <div className="deal-price">
              $299
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Deals;