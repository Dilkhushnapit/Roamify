import {
    FaComments,
    FaEnvelope,
    FaInstagram,
    FaBookOpen,
  } from "react-icons/fa";
  
  import "../../styles/contact.css";
  
  function ContactChannels() {
    const channels = [
      {
        icon: <FaComments />,
        badge: "Live Now",
        title: "Live Chat",
        description:
          "Talk to our travel experts instantly for booking assistance and urgent travel support.",
        action: "Start Live Chat →",
        color: "blue",
      },
  
      {
        icon: <FaEnvelope />,
        badge: "24hr Response",
        title: "Email Support",
        description:
          "Need detailed assistance? Send us an email and we'll respond within one business day.",
        action: "support@roamify.com",
        color: "orange",
      },
  
      {
        icon: <FaInstagram />,
        badge: "Social",
        title: "Social Media",
        description:
          "Follow us for travel inspiration, announcements and quick responses.",
        action: "@Roamify",
        color: "dark",
      },
  
      {
        icon: <FaBookOpen />,
        badge: "Help Center",
        title: "Knowledge Base",
        description:
          "Browse guides covering bookings, refunds, cancellations and account management.",
        action: "Visit Help Center →",
        color: "blue",
      },
    ];
  
    return (
      <section className="contact-channels">
  
        <div className="container">
  
          <div className="section-heading">
  
            <span className="section-tag">
              SUPPORT OPTIONS
            </span>
  
            <h2>
              Choose The Fastest
              Way To Reach Us
            </h2>
  
            <p>
              Whether you need immediate assistance or general travel
              advice, we're always available through multiple channels.
            </p>
  
          </div>
  
          <div className="channels-grid">
  
            {channels.map((item, index) => (
  
              <div className="channel-card" key={index}>
  
                <div className={`channel-icon ${item.color}`}>
                  {item.icon}
                </div>
  
                <span className={`channel-badge ${item.color}`}>
                  {item.badge}
                </span>
  
                <h3>{item.title}</h3>
  
                <p>{item.description}</p>
  
                <a href="/">
                  {item.action}
                </a>
  
              </div>
  
            ))}
  
          </div>
  
        </div>
  
      </section>
    );
  }
  
  export default ContactChannels;