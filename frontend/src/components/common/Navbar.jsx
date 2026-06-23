import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";

function Navbar() {
  const [isBlogOpen, setIsBlogOpen] = useState(false);

  // Clean professional SVG Icon
  const PencilIcon = (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="20" 
      height="20" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="#64748b" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M12 20h9"></path>
      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
    </svg>
  );

  return (
    <nav className="navbar">
      <div className="container navbar-container">

        <Link to="/" className="logo">
          ✈ Roamify
        </Link>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>

          {/* Blog Mega Menu Dropdown */}
          <div className="dropdown-wrapper">
            <button 
              className="dropdown-trigger"
              onClick={() => setIsBlogOpen(!isBlogOpen)}
            >
              Blog <span style={{ fontSize: '10px' }}>{isBlogOpen ? "▲" : "▼"}</span>
            </button>

            {isBlogOpen && (
              <div className="mega-menu">
                <div className="mega-menu-grid">
                  
                  {/* Item 1 */}
                  <Link to="/blog/flight-hacks" className="mega-menu-item" onClick={() => setIsBlogOpen(false)}>
                    <div className="menu-icon-box">{PencilIcon}</div>
                    <div>
                      <h4>Top Flight Hacks</h4>
                      <p>Save money on your next booking.</p>
                    </div>
                  </Link>

                  {/* Item 2 */}
                  <Link to="/blog/destinations" className="mega-menu-item" onClick={() => setIsBlogOpen(false)}>
                    <div className="menu-icon-box">{PencilIcon}</div>
                    <div>
                      <h4>Best Destinations 2026</h4>
                      <p>Explore top-rated places.</p>
                    </div>
                  </Link>

                  {/* Item 3 */}
                  <Link to="/blog/travel-insurance" className="mega-menu-item" onClick={() => setIsBlogOpen(false)}>
                    <div className="menu-icon-box">{PencilIcon}</div>
                    <div>
                      <h4>Travel Insurance Guide</h4>
                      <p>Why you need it before flying.</p>
                    </div>
                  </Link>

                  {/* Item 4 */}
                  <Link to="/blog/packing-tips" className="mega-menu-item" onClick={() => setIsBlogOpen(false)}>
                    <div className="menu-icon-box">{PencilIcon}</div>
                    <div>
                      <h4>Smart Packing Tips</h4>
                      <p>Pack light and travel easy.</p>
                    </div>
                  </Link>

                </div>

                {/* Footer Section */}
                <div className="mega-menu-footer">
                  <Link to="/blogs" className="view-all-link" onClick={() => setIsBlogOpen(false)}>
                    VIEW ALL BLOGS {">"}
                  </Link>
                </div>
              </div>
            )}
          </div>

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