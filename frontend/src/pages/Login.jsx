import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import LoginForm from "../components/auth/LoginForm";

function Login() {
  return (
    <>
      <Navbar />

      <div className="auth-container">
        <LoginForm />
      </div>

      <Footer />
    </>
  );
}

export default Login;