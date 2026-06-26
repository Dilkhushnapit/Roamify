import "../../styles/privacy.css";

function PrivacyHero() {
  return (
    <section className="privacy-hero">

      <div className="privacy-overlay"></div>

      <div className="container privacy-content">

        <span className="hero-badge">
          🔒 PRIVACY & SECURITY
        </span>

        <h1>
          Your Privacy
          <br />
          Matters To Us
        </h1>

        <p>
          We value your trust. Learn how Roamify collects,
          protects and uses your information to provide a
          secure and seamless travel experience.
        </p>

        <div className="privacy-meta">

          <div>

            <h3>Last Updated</h3>

            <p>June 2026</p>

          </div>

          <div>

            <h3>Version</h3>

            <p>2.1</p>

          </div>

          <div>

            <h3>Compliance</h3>

            <p>GDPR • CCPA</p>

          </div>

        </div>

      </div>

      <div className="privacy-wave">

        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <path
            fill="#fff"
            d="M0,96L80,90.7C160,85,320,75,480,64C640,53,800,43,960,53.3C1120,64,1280,96,1360,112L1440,128L1440,160L1360,160C1280,160,1120,160,960,160C800,160,640,160,480,160C320,160,160,160,80,160L0,160Z"
          />
        </svg>

      </div>

    </section>
  );
}

export default PrivacyHero;