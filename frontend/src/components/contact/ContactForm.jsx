import { useState } from "react";
import "../../styles/contact.css";

function ContactForm() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    console.log(formData);

    alert("Message Sent Successfully!");

  };

  return (

    <div className="contact-form-card">

      <span className="section-tag">
        SEND MESSAGE
      </span>

      <h2>Let's Start A Conversation</h2>

      <p>
        Have a question or need assistance?
        Fill out the form below and our team
        will get back to you shortly.
      </p>

      <form onSubmit={handleSubmit}>

        <div className="input-row">

          <div className="input-group">

            <label>Full Name</label>

            <input
              type="text"
              name="name"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
            />

          </div>

          <div className="input-group">

            <label>Email Address</label>

            <input
              type="email"
              name="email"
              placeholder="john@email.com"
              value={formData.email}
              onChange={handleChange}
            />

          </div>

        </div>

        <div className="input-group">

          <label>Subject</label>

          <input
            type="text"
            name="subject"
            placeholder="Booking Issue"
            value={formData.subject}
            onChange={handleChange}
          />

        </div>

        <div className="input-group">

          <label>Message</label>

          <textarea
            rows="6"
            name="message"
            placeholder="Write your message..."
            value={formData.message}
            onChange={handleChange}
          />

        </div>

        <button className="send-btn">
          Send Message
        </button>

      </form>

    </div>

  );

}

export default ContactForm;