import "../../styles/about.css";

function Stats() {
  return (
    <section className="stats-section">

      <div className="container">

        <div className="stats-header">

          <span className="section-tag">
            OUR IMPACT
          </span>

          <h2>
            Trusted by Travelers
            <br />
            Across the Globe
          </h2>

          <p>
            Every booking reflects our commitment to providing
            secure, seamless and memorable travel experiences.
          </p>

        </div>

        <div className="stats-grid">

          <div className="stats-card">

            <div className="stats-icon">
              ✈
            </div>

            <h3>12M+</h3>

            <p>Flights Booked</p>

          </div>

          <div className="stats-card">

            <div className="stats-icon">
              🌍
            </div>

            <h3>150+</h3>

            <p>Countries Covered</p>

          </div>

          <div className="stats-card">

            <div className="stats-icon">
              🤝
            </div>

            <h3>200+</h3>

            <p>Airline Partners</p>

          </div>

          <div className="stats-card">

            <div className="stats-icon">
              ⭐
            </div>

            <h3>4.8/5</h3>

            <p>Customer Rating</p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Stats;