import "../../styles/multiCity.css";

function MultiCityHero(){

    return(

        <section className="mc-hero">

            <div className="mc-overlay"></div>

            <div className="container mc-content">

                <span className="hero-badge">

                    🌍 MULTI-CITY FLIGHTS

                </span>

                <h1>

                    One Journey.

                    <br/>

                    Multiple Destinations.

                </h1>

                <p>

                    Build the perfect itinerary by combining
                    multiple cities into one seamless booking.
                    Discover more while spending less.

                </p>

                <div className="mc-builder-preview">

                    <div className="trip-tabs">

                        <button className="active">

                            Multi City

                        </button>

                        <button>

                            Round Trip

                        </button>

                        <button>

                            One Way

                        </button>

                    </div>

                    <div className="preview-routes">

                        <div className="route-row">

                            <input placeholder="From"/>

                            <input placeholder="To"/>

                            <input type="date"/>

                        </div>

                        <div className="route-row">

                            <input placeholder="From"/>

                            <input placeholder="To"/>

                            <input type="date"/>

                        </div>

                        <button className="add-flight-btn">

                            + Add Another Flight

                        </button>

                        <button className="search-route-btn">

                            Search Itinerary

                        </button>

                    </div>

                </div>

            </div>

        </section>

    )

}

export default MultiCityHero;