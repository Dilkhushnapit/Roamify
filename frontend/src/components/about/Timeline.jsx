import "../../styles/about.css";

function Timeline() {
  return (
    <section className="timeline-section">

      <div className="container">

        <div className="timeline-header">

          <span className="section-tag">
            OUR JOURNEY
          </span>

          <h2>
            Roamify Through The Years
          </h2>

          <p>
            From an ambitious idea to becoming a trusted travel
            platform, every milestone has shaped our journey.
          </p>

        </div>

        <div className="timeline">

          <div className="timeline-item">

            <div className="timeline-dot"></div>

            <div className="timeline-content">

              <span>2023</span>

              <h3>Roamify Was Born</h3>

              <p>
                The vision to simplify travel planning and booking
                was transformed into a real product.
              </p>

            </div>

          </div>

          <div className="timeline-item">

            <div className="timeline-dot"></div>

            <div className="timeline-content">

              <span>2024</span>

              <h3>Platform Development</h3>

              <p>
                Integrated airline APIs and developed the booking
                experience for users worldwide.
              </p>

            </div>

          </div>

          <div className="timeline-item">

            <div className="timeline-dot"></div>

            <div className="timeline-content">

              <span>2025</span>

              <h3>Rapid Growth</h3>

              <p>
                Crossed thousands of active travelers and expanded
                airline partnerships.
              </p>

            </div>

          </div>

          <div className="timeline-item">

            <div className="timeline-dot"></div>

            <div className="timeline-content">

              <span>2026</span>

              <h3>Global Expansion</h3>

              <p>
                Expanding services, introducing AI-powered travel
                recommendations and smarter booking experiences.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Timeline;