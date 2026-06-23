import "../../styles/auth.css";

function AuthLayout({ children }) {
  return (
    <div className="auth-page">

      <div className="auth-left">

        <div className="auth-overlay"></div>

        <div className="auth-content">

          <h1>✈ Roamify</h1>

          <h2>
            Explore the World
            <br />
            One Flight at a Time
          </h2>

          <p>
            Discover amazing destinations,
            compare prices and travel smarter.
          </p>

        </div>

      </div>

      <div className="auth-right">
        {children}
      </div>

    </div>
  );
}

export default AuthLayout;