import {
    FaRoute,
    FaWallet,
    FaClock,
    FaGlobeAsia,
  } from "react-icons/fa";
  
  import "../../styles/multiCity.css";
  
  const features = [
    {
      icon: <FaRoute />,
      title: "Flexible Routes",
      text: "Visit multiple cities in one seamless itinerary without booking separate tickets.",
    },
    {
      icon: <FaWallet />,
      title: "Better Savings",
      text: "Multi-city fares are often cheaper than booking multiple one-way flights.",
    },
    {
      icon: <FaClock />,
      title: "Save Time",
      text: "Manage your complete journey with one booking and one itinerary.",
    },
    {
      icon: <FaGlobeAsia />,
      title: "Explore More",
      text: "Perfect for vacations, business trips and backpacking adventures.",
    },
  ];
  
  function MultiCityFeatures() {
    return (
      <section className="why-section">
  
        <div className="container">
  
          <div className="section-heading">
  
            <span className="section-tag">
              WHY ROAMIFY
            </span>
  
            <h2>Why Book Multi-City Flights?</h2>
  
            <p>
              Discover the benefits of planning your complete
              journey with a single itinerary.
            </p>
  
          </div>
  
          <div className="why-grid">
  
            {features.map((item, index) => (
  
              <div
                className="why-card"
                key={index}
              >
  
                <div className="why-icon">
                  {item.icon}
                </div>
  
                <h3>{item.title}</h3>
  
                <p>{item.text}</p>
  
              </div>
  
            ))}
  
          </div>
  
        </div>
  
      </section>
    );
  }
  
  export default MultiCityFeatures;