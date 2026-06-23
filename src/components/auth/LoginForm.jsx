import { Link } from "react-router-dom";

import "../../styles/auth.css";

function LoginForm() {
  return (
    <section className="auth-section">

      <div className="auth-card">

        <h1>Welcome Back</h1>

        <p>
          Login to manage your trips and bookings.
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

          <button type="submit">
            Login
          </button>

        </form>

        <div className="auth-link">
          Don't have an account?

          <Link to="/register">
            Register
          </Link>
        </div>

      </div>

    </section>
  );
}

export default LoginForm;