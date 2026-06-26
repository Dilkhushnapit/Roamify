import "../../styles/about.css";

function AboutHero() {
  return (
    <section className="about-hero">

      <div className="hero-overlay"></div>

      <div className="container about-hero-container">

        <div className="about-hero-content">

          <span className="hero-tag">
            ✈ ABOUT ROAMIFY
          </span>

          <h1>
            Discover the World,
            <br />
            Travel Without Limits.
          </h1>

          <p>
            Roamify is a modern travel platform designed to make
            flight booking effortless, affordable, and reliable.
            Whether you're planning a weekend getaway or an
            international adventure, we help you compare,
            discover, and book with confidence.
          </p>

          <div className="hero-buttons">

            <button className="primary-btn">
              Explore Flights
            </button>

            <button className="secondary-btn">
              Learn More
            </button>

          </div>

        </div>

        <div className="hero-stats-card">

          <div className="stat">

            <h2>12M+</h2>

            <p>Flights Booked</p>

          </div>

          <div className="stat">

            <h2>200+</h2>

            <p>Airline Partners</p>

          </div>

          <div className="stat">

            <h2>4.8★</h2>

            <p>User Rating</p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default AboutHero;