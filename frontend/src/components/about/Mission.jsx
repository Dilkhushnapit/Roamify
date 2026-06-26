import "../../styles/about.css";

function Mission() {
  return (
    <section className="mission-section">

      <div className="container">

        <div className="mission-heading">

          <span className="section-tag">
            OUR PURPOSE
          </span>

          <h2>
            Driven By Purpose.
            <br />
            Inspired By Every Journey.
          </h2>

          <p>
            Everything we build at Roamify revolves around creating
            smarter, safer and more enjoyable travel experiences.
          </p>

        </div>

        <div className="mission-grid">

          <div className="mission-card">

            <div className="mission-icon">
              🎯
            </div>

            <h3>Our Mission</h3>

            <p>
              To simplify flight booking through technology,
              transparency and customer-first experiences,
              helping travelers discover the best journeys at
              the best prices.
            </p>

          </div>

          <div className="mission-card">

            <div className="mission-icon">
              🌍
            </div>

            <h3>Our Vision</h3>

            <p>
              To become the world's most trusted travel platform,
              connecting people to destinations through seamless,
              innovative and secure travel solutions.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Mission;