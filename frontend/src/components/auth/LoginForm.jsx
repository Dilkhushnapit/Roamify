import { Link } from "react-router-dom";
import "../../styles/auth.css";

function LoginForm() {
  return (
    <div className="auth-wrapper">

      <div className="auth-left">

        <div className="auth-overlay"></div>

        <div className="auth-content">

          <h1>✈ Roamify</h1>

          <h2>
            Discover Your
            Next Adventure
          </h2>

          <div className="feature-list">

            <div className="feature-item">
              ✈ Compare Flights Across Airlines
            </div>

            <div className="feature-item">
              💰 Exclusive Travel Deals
            </div>

            <div className="feature-item">
              🔒 Secure Booking Experience
            </div>

            <div className="feature-item">
              🎧 24/7 Travel Support
            </div>

          </div>

        </div>

      </div>

      <div className="auth-right">

        <div className="auth-card">

          <h2>Welcome Back</h2>

          <p>
            Login to continue your journey.
          </p>

          <form>

            <input
              type="email"
              placeholder="Email Address"
            />

            <input
              type="password"
              placeholder="Password"
            />

            <button
              type="submit"
              className="primary-btn"
            >
              Login
            </button>

          </form>

          <div className="divider">
            <span>OR</span>
          </div>

          <button className="social-btn">
            Continue with Google
          </button>

          <p className="switch-link">
            Don't have an account?

            <Link to="/register">
              Register
            </Link>
          </p>

        </div>

      </div>

    </div>
  );
}

export default LoginForm;