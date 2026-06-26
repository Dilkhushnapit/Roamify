import {
    FaPhoneAlt,
    FaEnvelope,
    FaMapMarkerAlt,
    FaClock
  } from "react-icons/fa";
  
  import "../../styles/contact.css";
  
  function ContactSidebar() {
  
    return (
  
      <div className="contact-sidebar">
  
        <div className="info-card">
  
          <FaPhoneAlt className="info-icon"/>
  
          <h3>Call Us</h3>
  
          <p>+91 98765 43210</p>
  
        </div>
  
        <div className="info-card">
  
          <FaEnvelope className="info-icon"/>
  
          <h3>Email</h3>
  
          <p>support@roamify.com</p>
  
        </div>
  
        <div className="info-card">
  
          <FaMapMarkerAlt className="info-icon"/>
  
          <h3>Office</h3>
  
          <p>
  
            Roamify Headquarters
  
            <br />
  
            Gangtok, Sikkim
  
            <br />
  
            India
  
          </p>
  
        </div>
  
        <div className="info-card">
  
          <FaClock className="info-icon"/>
  
          <h3>Working Hours</h3>
  
          <p>
  
            Monday - Friday
  
            <br />
  
            9:00 AM - 6:00 PM
  
            <br />
  
            Emergency Support 24/7
  
          </p>
  
        </div>
  
      </div>
  
    );
  
  }
  
  export default ContactSidebar;