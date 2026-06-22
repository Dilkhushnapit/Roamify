import { Link } from "react-router-dom";
import "../../styles/navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container navbar-container">

        <Link to="/" className="logo">
          ✈ Roamify
        </Link>

        <div className="nav-links">
          <Link to="/">Home</Link>

          <Link to="/about">About</Link>

          <Link to="/contact">Contact</Link>

          <Link to="/privacy">Privacy</Link>
        </div>

        <button className="nav-btn">
          Explore Deals
        </button>

      </div>
    </nav>
  );
}

export default Navbar;