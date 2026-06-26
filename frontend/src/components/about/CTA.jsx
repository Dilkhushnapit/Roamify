import "../../styles/about.css";

function CTA() {
  return (
    <section className="cta-section">

      <div className="container">

        <div className="cta-card">

          <div className="cta-left">

            <span className="section-tag">
              READY TO EXPLORE?
            </span>

            <h2>
              Your Next Adventure
              Starts With Roamify
            </h2>

            <p>
              Compare flights, discover destinations,
              and travel smarter with our seamless
              booking experience.
            </p>

          </div>

          <div className="cta-right">

            <button className="cta-primary-btn">
              Explore Flights →
            </button>

            <button className="cta-secondary-btn">
              Contact Us
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}

export default CTA;