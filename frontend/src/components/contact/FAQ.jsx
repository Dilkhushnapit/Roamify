import { useState } from "react";
import "../../styles/contact.css";

function FAQ() {

  const [active, setActive] = useState(null);

  const faqData = [

    {
      question: "How do I cancel my booking?",
      answer:
        "You can cancel your booking by visiting 'My Trips' after logging into your account. Refund eligibility depends on the airline's cancellation policy."
    },

    {
      question: "How long does a refund take?",
      answer:
        "Refunds are usually processed within 5–10 business days depending on your payment method and airline."
    },

    {
      question: "Can I change my travel dates?",
      answer:
        "Yes. Date changes depend on airline policies and fare rules. Applicable fare differences and airline fees may apply."
    },

    {
      question: "How do I contact customer support?",
      answer:
        "You can reach us through Live Chat, Email, or the Contact Form. Emergency support is available 24/7."
    },

    {
      question: "Are my payments secure?",
      answer:
        "Absolutely. All transactions are protected using industry-standard SSL encryption and secure payment gateways."
    }

  ];

  return (

    <section className="faq-section">

      <div className="container">

        <div className="section-heading">

          <span className="section-tag">
            FAQ
          </span>

          <h2>
            Frequently Asked Questions
          </h2>

          <p>
            Find quick answers to the questions our travellers ask the most.
          </p>

        </div>

        <div className="faq-wrapper">

          {faqData.map((item, index) => (

            <div className="faq-card" key={index}>

              <button
                className="faq-question"
                onClick={() =>
                  setActive(active === index ? null : index)
                }
              >

                <span>{item.question}</span>

                <span className="faq-icon">

                  {active === index ? "−" : "+"}

                </span>

              </button>

              {active === index && (

                <div className="faq-answer">

                  <p>{item.answer}</p>

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