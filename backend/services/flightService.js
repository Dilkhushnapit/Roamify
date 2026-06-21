import axios from "axios";
import { env } from "../config/env.js";

export const getFlights = async ({
  departure_id,
  arrival_id,
  outbound_date,
  adults,
  travel_class,
}) => {
  try {
    const response = await axios.get(
      "https://google-flights2.p.rapidapi.com/api/v1/searchFlights",
      {
        params: {
          departure_id,
          arrival_id,
          outbound_date,
          travel_class,
          adults,
          currency: "USD",
          language_code: "en-US",
          country_code: "US",
          search_type: "best",
          show_hidden: 1,
        },
        
        headers: {
          "x-rapidapi-key": env.RAPID_API_KEY,
          "x-rapidapi-host": env.RAPID_API_HOST,
        },
      }
    );
    

    return response.data;
  } catch (error) {
    console.error(
      "Flight API Error:",
      error.response?.data || error.message
    );

    throw new Error(
      error.response?.data?.message || "Failed to fetch flights"
    );
  }
};