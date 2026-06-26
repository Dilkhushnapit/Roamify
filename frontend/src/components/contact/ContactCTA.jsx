import { Link } from "react-router-dom";
import "../../styles/contact.css";

function ContactCTA() {

  return (

    <section className="contact-cta">

      <div className="container">

        <div className="contact-cta-card">

          <h2>
            Still Need Help?
          </h2>

          <p>
            Our travel specialists are available around the clock to
            assist you with bookings, cancellations and travel planning.
          </p>

          <div className="contact-cta-buttons">

            <Link
              to="/"
              className="contact-cta-primary"
            >
              Explore Flights
            </Link>

            <Link
              to="/about"
              className="contact-cta-secondary"
            >
              Learn More
            </Link>

          </div>

        </div>

      </div>

    </section>

  );

}

export default ContactCTA;