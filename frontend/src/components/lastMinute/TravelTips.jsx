import {
    FaSuitcaseRolling,
    FaPassport,
    FaPlaneDeparture,
    FaCreditCard,
  } from "react-icons/fa";
  
  import "../../styles/lastMinute.css";
  
  const tips = [
    {
      icon: <FaSuitcaseRolling />,
      title: "Pack Light",
      text:
        "Travelling with cabin baggage only helps avoid additional baggage fees and saves time.",
    },
    {
      icon: <FaPassport />,
      title: "Keep Documents Ready",
      text:
        "Always verify passport validity, visas and travel documents before booking.",
    },
    {
      icon: <FaPlaneDeparture />,
      title: "Check-In Early",
      text:
        "Online check-in opens before departure and helps you secure better seats.",
    },
    {
      icon: <FaCreditCard />,
      title: "Use Reward Cards",
      text:
        "Travel credit cards can provide cashback, lounge access and airline miles.",
    },
  ];
  
  function TravelTips() {
    return (
      <section className="travel-tips">
  
        <div className="container">
  
          <div className="section-heading">
  
            <span className="section-tag">
  
              TRAVEL TIPS
  
            </span>
  
            <h2>
  
              Travel Smarter With Roamify
  
            </h2>
  
            <p>
  
              Simple travel tips that help you save money,
              reduce stress and enjoy a smoother journey.
  
            </p>
  
          </div>
  
          <div className="tips-grid">
  
            {tips.map((tip, index) => (
  
              <div
                className="tip-card"
                key={index}
              >
  
                <div className="tip-icon">
  
                  {tip.icon}
  
                </div>
  
                <h3>{tip.title}</h3>
  
                <p>{tip.text}</p>
  
              </div>
  
            ))}
  
          </div>
  
        </div>
  
      </section>
    );
  }
  
  export default TravelTips;