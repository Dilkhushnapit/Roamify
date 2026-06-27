import "../../styles/multiCity.css";

const tips = [
  "Plan the longest stay in the destination with the highest airfare.",
  "Travel mid-week to save on flight costs.",
  "Leave at least 2–3 hours between connecting flights.",
  "Book your entire itinerary together for better pricing.",
];

function TravelTips() {
  return (
    <section className="mc-tips">

      <div className="container">

        <div className="section-heading">

          <span className="section-tag">
            TRAVEL SMART
          </span>

          <h2>Multi-City Travel Tips</h2>

        </div>

        <div className="tips-list">

          {tips.map((tip, index) => (

            <div className="tip-item" key={index}>

              <span>✓</span>

              <p>{tip}</p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default TravelTips;