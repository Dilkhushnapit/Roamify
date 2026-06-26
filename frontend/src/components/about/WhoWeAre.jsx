import "../../styles/about.css";

function WhoWeAre() {
  return (
    <section className="who-section">

      <div className="container who-container">

        {/* Left Side */}

        <div className="who-image">

          <img
            src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=900"
            alt="Travel"
          />

          <div className="experience-card">
            <h2>10+</h2>
            <p>Years of Travel Experience</p>
          </div>

        </div>

        {/* Right Side */}

        <div className="who-content">

          <span className="section-tag">
            WHO WE ARE
          </span>

          <h2>
            Building Better
            <br />
            Travel Experiences
          </h2>

          <p>
            Roamify is a smart travel platform that simplifies the
            way people search, compare and book flights. We combine
            advanced technology with trusted airline partnerships to
            provide transparent pricing, seamless booking and an
            exceptional travel experience.
          </p>

          <p>
            Whether you're travelling for work, leisure or your
            dream vacation, Roamify ensures every journey starts
            with confidence.
          </p>

          <div className="feature-grid">

            <div className="feature-box">
              ✈
              <h4>Compare Flights</h4>
              <p>Find the best fares instantly.</p>
            </div>

            <div className="feature-box">
              💳
              <h4>Secure Booking</h4>
              <p>Safe and encrypted payments.</p>
            </div>

            <div className="feature-box">
              🌍
              <h4>Global Destinations</h4>
              <p>Travel across hundreds of cities.</p>
            </div>

            <div className="feature-box">
              🎧
              <h4>24/7 Support</h4>
              <p>We're here whenever you need us.</p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default WhoWeAre;