import { useState } from "react";
import "../../styles/multiCity.css";

const questions = [
  {
    q: "What is a multi-city flight?",
    a: "A multi-city itinerary allows you to visit multiple destinations under a single booking.",
  },
  {
    q: "Can I add more than three cities?",
    a: "Yes. Roamify supports multiple flight segments depending on airline availability.",
  },
  {
    q: "Is it cheaper than booking separately?",
    a: "In many cases yes. Airlines usually offer better pricing for connected itineraries.",
  },
];

function MultiCityFAQ() {

  const [activeIndex, setActiveIndex] = useState(0);

  return (

    <section className="mc-faq">

      <div className="container">

        <div className="section-heading">

          <span className="section-tag">
            FAQ
          </span>

          <h2>Frequently Asked Questions</h2>

          <p>
            Everything you need to know before planning
            your multi-city adventure.
          </p>

        </div>

        {questions.map((item, index) => (

          <div
            className="faq-box"
            key={index}
          >

            <button
              onClick={() =>
                setActiveIndex(
                  activeIndex === index ? null : index
                )
              }
            >

              {item.q}

              <span>

                {activeIndex === index ? "-" : "+"}

              </span>

            </button>

            {activeIndex === index && (

              <div className="faq-content">

                {item.a}

              </div>

            )}

          </div>

        ))}

      </div>

    </section>

  );

}

export default MultiCityFAQ;