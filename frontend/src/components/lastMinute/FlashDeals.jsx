import "../../styles/lastMinute.css";

const deals = [
  {
    city: "Tokyo",
    country: "Japan",
    price: "₹24,999",
    discount: "35%",
    time: "02h 14m",
    image:
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800",
  },
  {
    city: "Dubai",
    country: "UAE",
    price: "₹18,499",
    discount: "28%",
    time: "05h 09m",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800",
  },
  {
    city: "London",
    country: "United Kingdom",
    price: "₹39,999",
    discount: "42%",
    time: "01h 33m",
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800",
  },
];

function FlashDeals() {
  return (
    <section className="flash-section">

      <div className="container">

        <div className="section-heading">

          <span className="section-tag">
            FLASH DEALS
          </span>

          <h2>Deals Ending Soon</h2>

          <p>
            Grab these incredible offers before they're gone.
          </p>

        </div>

        <div className="flash-grid">

          {deals.map((deal, index) => (

            <div className="flash-card" key={index}>

              <img
                src={deal.image}
                alt={deal.city}
              />

              <div className="flash-body">

                <span className="discount">
                  Save {deal.discount}
                </span>

                <h3>{deal.city}</h3>

                <small>{deal.country}</small>

                <h4>{deal.price}</h4>

                <div className="deal-footer">

                  <span>
                    ⏰ {deal.time}
                  </span>

                  <button>
                    Book
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default FlashDeals;