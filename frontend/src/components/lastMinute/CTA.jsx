import { Link } from "react-router-dom";

import "../../styles/lastMinute.css";

function CTA() {

  return (

    <section className="lm-cta">

      <div className="container">

        <div className="lm-cta-card">

          <span className="section-tag">

            READY TO FLY?

          </span>

          <h2>

            Your Next Adventure
            Starts Today.

          </h2>

          <p>

            Thousands of discounted flights are waiting.
            Don't miss today's exclusive offers.

          </p>

          <div className="cta-buttons">

            <Link
              to="/"
              className="primary-btn"
            >

              Search Flights

            </Link>

            <Link
              to="/contact"
              className="secondary-btn"
            >

              Contact Us

            </Link>

          </div>

        </div>

      </div>

    </section>

  );

}

export default CTA;