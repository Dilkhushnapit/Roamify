import { useState } from "react";
import "../../styles/multiCity.css";

function MultiCityBuilder() {

  const [legs, setLegs] = useState([
    { from: "", to: "", date: "" },
    { from: "", to: "", date: "" },
  ]);

  const addLeg = () => {

    if (legs.length < 5) {

      setLegs([
        ...legs,
        { from: "", to: "", date: "" },
      ]);

    }

  };

  return (

    <section className="builder-section">

      <div className="container">

        <div className="section-heading">

          <span className="section-tag">

            PLAN YOUR ROUTE

          </span>

          <h2>

            Build Your Perfect Itinerary

          </h2>

          <p>

            Add multiple destinations and create a seamless
            travel experience.

          </p>

        </div>

        <div className="builder-card">

          {legs.map((leg, index) => (

            <div
              className="builder-row"
              key={index}
            >

              <input placeholder="From City" />

              <input placeholder="Destination" />

              <input type="date" />

            </div>

          ))}

          <button
            className="builder-add"
            onClick={addLeg}
          >

            + Add Flight

          </button>

          <button className="builder-search">

            Search Itinerary

          </button>

        </div>

      </div>

    </section>

  );

}

export default MultiCityBuilder;