import { Link } from "react-router-dom";
import "../../styles/multiCity.css";

function MultiCityCTA() {

  return (

    <section className="mc-cta">

      <div className="container">

        <div className="cta-card">

          <span className="section-tag">

            START YOUR JOURNEY

          </span>

          <h2>

            Ready To Explore Multiple Destinations?

          </h2>

          <p>

            Plan your dream itinerary with Roamify and
            experience seamless multi-city travel at the
            best prices.

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

export default MultiCityCTA;