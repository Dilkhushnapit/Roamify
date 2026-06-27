import "../../styles/multiCity.css";

const routes = [

  {
    title: "Europe Explorer",
    cities: "London → Paris → Rome",
    days: "10 Days",
    price: "₹78,999",
  },

  {
    title: "Asia Highlights",
    cities: "Singapore → Bali → Tokyo",
    days: "12 Days",
    price: "₹82,499",
  },

  {
    title: "US Adventure",
    cities: "New York → Chicago → Los Angeles",
    days: "9 Days",
    price: "₹96,999",
  },

];

function RouteCards() {

  return (

    <section className="route-section">

      <div className="container">

        <div className="section-heading">

          <span className="section-tag">

            POPULAR ROUTES

          </span>

          <h2>

            Traveller Favourite Itineraries

          </h2>

        </div>

        <div className="route-grid">

          {routes.map((route, index) => (

            <div
              className="route-card"
              key={index}
            >

              <span className="route-days">

                {route.days}

              </span>

              <h3>{route.title}</h3>

              <p>{route.cities}</p>

              <h4>{route.price}</h4>

              <button>

                View Trip

              </button>

            </div>

          ))}

        </div>

      </div>

    </section>

  );

}

export default RouteCards;