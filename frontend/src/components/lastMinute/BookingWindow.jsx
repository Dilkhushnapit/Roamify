import "../../styles/lastMinute.css";

const bookingData = [
  {
    day: "Monday",
    title: "Best Day To Search",
    description:
      "Historical pricing shows Monday searches often reveal better flight deals.",
  },
  {
    day: "Tuesday",
    title: "Cheapest Day To Book",
    description:
      "Many airlines release promotional fares and discounts early in the week.",
  },
  {
    day: "Wednesday",
    title: "Fly Midweek",
    description:
      "Flying during the middle of the week usually costs less than weekends.",
  },
];

function BookingWindow() {
  return (
    <section className="booking-window">

      <div className="container">

        <div className="section-heading">

          <span className="section-tag">
            SMART BOOKING
          </span>

          <h2>
            Know The Best Time To Book
          </h2>

          <p>
            Timing matters. Use these booking insights to
            maximize your savings and travel smarter.
          </p>

        </div>

        <div className="booking-grid">

          {bookingData.map((item, index) => (

            <div
              className="booking-card"
              key={index}
            >

              <div className="booking-day">

                {item.day}

              </div>

              <h3>{item.title}</h3>

              <p>{item.description}</p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default BookingWindow;