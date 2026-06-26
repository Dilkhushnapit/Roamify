import "../../styles/privacy.css";

function PrivacyContent() {
  return (
    <div className="privacy-main">

      {/* ======================= */}

      <section id="overview" className="policy-card">

        <h2>Overview</h2>

        <p>

          Roamify values your privacy and is committed to
          protecting your personal information. This Privacy
          Policy explains how we collect, use and safeguard
          your information whenever you use our website or
          services.

        </p>

        <div className="policy-highlight">

          🔒 Your personal information is never sold to
          third parties.

        </div>

      </section>

      {/* ======================= */}

      <section id="collection" className="policy-card">

        <h2>Information We Collect</h2>

        <ul>

          <li>Name and contact information</li>

          <li>Email address</li>

          <li>Booking history</li>

          <li>Payment details (processed securely)</li>

          <li>Travel preferences</li>

          <li>Device and browser information</li>

        </ul>

      </section>

      {/* ======================= */}

      <section id="usage" className="policy-card">

        <h2>How We Use Your Information</h2>

        <ul>

          <li>Process flight bookings</li>

          <li>Provide customer support</li>

          <li>Improve our services</li>

          <li>Send booking updates</li>

          <li>Prevent fraud</li>

        </ul>

      </section>

      {/* ======================= */}

      <section id="cookies" className="policy-card">

        <h2>Cookies</h2>

        <p>

          Cookies help us personalize your experience,
          remember your preferences and improve website
          performance.

        </p>

      </section>

      {/* ======================= */}

      <section id="security" className="policy-card">

        <h2>Data Security</h2>

        <p>

          Roamify protects your information using SSL
          encryption, secure payment gateways and industry
          standard security practices.

        </p>

      </section>

      {/* ======================= */}

      <section id="rights" className="policy-card">

        <h2>Your Rights</h2>

        <ul>

          <li>Access your data</li>

          <li>Request corrections</li>

          <li>Delete your account</li>

          <li>Withdraw consent</li>

          <li>Download your information</li>

        </ul>

      </section>

      {/* ======================= */}

      <section id="contact" className="policy-card">

        <h2>Contact Us</h2>

        <p>

          If you have any questions regarding this Privacy
          Policy, please contact us.

        </p>

        <div className="contact-box">

          <strong>Email</strong>

          <br />

          privacy@roamify.com

          <br /><br />

          <strong>Office</strong>

          <br />

          Bangalore, India

        </div>

      </section>

    </div>
  );
}

export default PrivacyContent;