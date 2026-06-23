import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import RegisterForm from "../components/auth/RegisterForm";

function Register() {
  return (
    <>
      <Navbar />

      <div className="auth-container">
        <RegisterForm />
      </div>

      <Footer />
    </>
  );
}

export default Register;