import { useState } from "react";
import "../../styles/lastMinute.css";

const faqData = [
  {
    question: "How do last-minute flight deals work?",
    answer:
      "Airlines occasionally reduce prices on unsold seats close to departure. These offers help fill flights while allowing travelers to save money."
  },
  {
    question: "Are last-minute bookings refundable?",
    answer:
      "Refund policies depend on the airline and fare type. Always review the cancellation terms before completing your booking."
  },
  {
    question: "Can I change my travel dates after booking?",
    answer:
      "Most airlines allow date changes for an additional fee, subject to seat availability and fare conditions."
  },
  {
    question: "Are taxes included in the displayed price?",
    answer:
      "Yes. Roamify displays the total estimated fare including applicable taxes and standard charges."
  },
  {
    question: "When is the best time to book?",
    answer:
      "Mid-week bookings generally offer better prices, although availability depends on destination and season."
  }
];

function FAQ() {

  const [active, setActive] = useState(0);

  return (

    <section className="lm-faq">

      <div className="container">

        <div className="section-heading">

          <span className="section-tag">
            FAQ
          </span>

          <h2>
            Frequently Asked Questions
          </h2>

          <p>
            Everything you need to know before booking your
            next last-minute flight.
          </p>

        </div>

        <div className="faq-wrapper">

          {faqData.map((item, index) => (

            <div
              className="faq-item"
              key={index}
            >

              <button
                className="faq-question"
                onClick={() =>
                  setActive(active === index ? null : index)
                }
              >

                {item.question}

                <span>

                  {active === index ? "−" : "+"}

                </span>

              </button>

              {active === index && (

                <div className="faq-answer">

                  {item.answer}

                </div>

              )}

            </div>

          ))}

        </div>

      </div>

    </section>

  );

}

export default FAQ;