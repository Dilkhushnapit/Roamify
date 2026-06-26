import "../../styles/about.css";

function Team() {
  return (
    <section className="team-section">

      <div className="container">

        <div className="team-header">

          <span className="section-tag">
            OUR TEAM
          </span>

          <h2>
            Meet The People Behind Roamify
          </h2>

          <p>
            Passionate designers, developers and travel enthusiasts
            working together to create unforgettable journeys.
          </p>

        </div>

        <div className="team-grid">

          <div className="team-card">

            <img
              src="https://i.pravatar.cc/300?img=15"
              alt=""
            />

            <h3>Sarah Johnson</h3>

            <span>Founder & CEO</span>

          </div>

          <div className="team-card">

            <img
              src="https://i.pravatar.cc/300?img=12"
              alt=""
            />

            <h3>Michael Brown</h3>

            <span>Chief Technology Officer</span>

          </div>

          <div className="team-card">

            <img
              src="https://i.pravatar.cc/300?img=32"
              alt=""
            />

            <h3>Emily Davis</h3>

            <span>Lead Designer</span>

          </div>

          <div className="team-card">

            <img
              src="https://i.pravatar.cc/300?img=47"
              alt=""
            />

            <h3>James Wilson</h3>

            <span>Customer Success</span>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Team;