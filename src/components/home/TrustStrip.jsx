import "../../styles/home.css";

function TrustStrip() {
  return (
    <section className="trust-strip">
      <div className="container trust-container">

        <div className="trust-item">
          🔒
          <div>
            <h4>Secure Booking</h4>
            <p>Protected and encrypted payments</p>
          </div>
        </div>

        <div className="trust-item">
          ✈
          <div>
            <h4>Best Flight Deals</h4>
            <p>Compare hundreds of airlines</p>
          </div>
        </div>

        <div className="trust-item">
          🎧
          <div>
            <h4>24/7 Support</h4>
            <p>Travel assistance anytime</p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default TrustStrip;