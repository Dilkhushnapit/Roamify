import "../../styles/lastMinute.css";

const destinations = [
  {
    city: "Paris",
    country: "France",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800",
  },
  {
    city: "Bali",
    country: "Indonesia",
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800",
  },
  {
    city: "Singapore",
    country: "Singapore",
    image:
      "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800",
  },
  {
    city: "New York",
    country: "USA",
    image:
      "https://images.unsplash.com/photo-1499092346589-b9b6be3e94b2?w=800",
  },
  {
    city: "Sydney",
    country: "Australia",
    image:
      "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800",
  },
  {
    city: "Rome",
    country: "Italy",
    image:
      "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800",
  },
];

function DestinationGrid() {
  return (
    <section className="destination-section">

      <div className="container">

        <div className="section-heading">

          <span className="section-tag">
            TOP DESTINATIONS
          </span>

          <h2>Where Will You Fly Next?</h2>

          <p>
            Discover trending destinations with incredible
            last-minute fares.
          </p>

        </div>

        <div className="destination-grid">

          {destinations.map((item, index) => (

            <div
              className="destination-card"
              key={index}
            >

              <img
                src={item.image}
                alt={item.city}
              />

              <div className="destination-overlay">

                <h3>{item.city}</h3>

                <p>{item.country}</p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default DestinationGrid;