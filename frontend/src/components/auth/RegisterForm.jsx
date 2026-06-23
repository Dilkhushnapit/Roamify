import { Link } from "react-router-dom";
import "../../styles/auth.css";

function RegisterForm() {
  return (
    <div className="auth-wrapper">

      <div className="auth-left">

        <div className="auth-overlay"></div>

        <div className="auth-content">

          <h1>✈ Roamify</h1>

          <h2>
            Start Your
            Next Adventure
          </h2>

          <div className="feature-list">

            <div className="feature-item">
              ✈ Explore Destinations Worldwide
            </div>

            <div className="feature-item">
              💰 Save With Exclusive Deals
            </div>

            <div className="feature-item">
              🔒 Safe & Secure Payments
            </div>

            <div className="feature-item">
              ⭐ Trusted By Thousands
            </div>

          </div>

        </div>

      </div>

      <div className="auth-right">

        <div className="auth-card">

          <h2>Create Account</h2>

          <p>
            Join Roamify today.
          </p>

          <form>

            <input
              type="text"
              placeholder="Full Name"
            />

            <input
              type="email"
              placeholder="Email Address"
            />

            <input
              type="password"
              placeholder="Password"
            />

            <input
              type="password"
              placeholder="Confirm Password"
            />

            <button
              type="submit"
              className="primary-btn"
            >
              Register
            </button>

          </form>

          <div className="divider">
            <span>OR</span>
          </div>

          <button className="social-btn">
            Continue with Google
          </button>

          <p className="switch-link">
            Already have an account?

            <Link to="/login">
              Login
            </Link>
          </p>

        </div>

      </div>

    </div>
  );
}

export default RegisterForm;