import "../../styles/lastMinute.css";

function LastMinuteHero() {

    return (

        <section className="lm-hero">

            <div className="lm-overlay"></div>

            <div className="container lm-content">

                <span className="hero-badge">

                    🔥 LAST MINUTE DEALS

                </span>

                <h1>

                    Fly Today.
                    <br />

                    Save Big Tomorrow.

                </h1>

                <p>

                    Discover exclusive last-minute airfare,
                    flash deals and discounted flights across
                    domestic and international destinations.

                </p>

                <div className="lm-search-card">

                    <div className="trip-tabs">

                        <button className="active">
                            One Way
                        </button>

                        <button>
                            Round Trip
                        </button>

                    </div>

                    <div className="search-grid">

                        <input
                            type="text"
                            placeholder="Flying From"
                        />

                        <input
                            type="text"
                            placeholder="Flying To"
                        />

                        <input
                            type="date"
                        />

                        <button>

                            Search Flights

                        </button>

                    </div>

                </div>

            </div>

        </section>

    );

}

export default LastMinuteHero;