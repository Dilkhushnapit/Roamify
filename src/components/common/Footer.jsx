import { Link } from "react-router-dom";

import "../../styles/footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="container footer-container">

        <div>
          <h2>Roamify</h2>

          <p>
            Affordable flights and trusted travel experiences.
          </p>
        </div>

        <div className="footer-links">
          <Link to="/">Home</Link>

          <Link to="/about">About</Link>

          <Link to="/contact">Contact</Link>

          <Link to="/privacy">Privacy</Link>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 Roamify. All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;