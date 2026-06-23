import { Link } from "react-router-dom";

import "../../styles/auth.css";

function RegisterForm() {
  return (
    <section className="auth-section">

      <div className="auth-card">

        <h1>Create Account</h1>

        <p>
          Join Roamify and start exploring.
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

          <button type="submit">
            Register
          </button>

        </form>

        <div className="auth-link">
          Already have an account?

          <Link to="/login">
            Login
          </Link>
        </div>

      </div>

    </section>
  );
}

export default RegisterForm;