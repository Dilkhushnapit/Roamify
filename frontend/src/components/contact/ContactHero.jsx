import "../../styles/contact.css";

function ContactHero() {
  return (
    <section className="contact-hero">

      <div className="contact-hero-overlay"></div>

      <div className="container contact-hero-content">

        <span className="hero-badge">
          ✈ GET IN TOUCH
        </span>

        <h1>
          We're Here Whenever
          <br />
          You Need Us
        </h1>

        <p>
          Questions, feedback, booking assistance or travel
          emergencies—our dedicated support team is available
          to help you every step of your journey.
        </p>

        <div className="hero-buttons">

          <button className="contact-primary-btn">
            Contact Support
          </button>

          <button className="contact-secondary-btn">
            Browse Help Center
          </button>

        </div>

        <div className="hero-contact-stats">

          <div>

            <h3>24/7</h3>

            <span>Live Support</span>

          </div>

          <div>

            <h3>&lt;5 min</h3>

            <span>Average Reply</span>

          </div>

          <div>

            <h3>98%</h3>

            <span>Customer Satisfaction</span>

          </div>

        </div>

      </div>

      <div className="hero-wave">

        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            d="M0,96L80,90.7C160,85,320,75,480,64C640,53,800,43,960,53.3C1120,64,1280,96,1360,112L1440,128L1440,160L1360,160C1280,160,1120,160,960,160C800,160,640,160,480,160C320,160,160,160,80,160L0,160Z"
          />
        </svg>

      </div>

    </section>
  );
}

export default ContactHero;