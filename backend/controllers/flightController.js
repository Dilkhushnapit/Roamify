import { getFlights } from "../services/flightService.js";
export const searchFlights = async (req, res) => {
  try {
    const {
      departure_id,
      arrival_id,
      outbound_date,
      adults = 1,
      travel_class = "ECONOMY",
    } = req.query;

    if (!departure_id || !arrival_id || !outbound_date) {
      return res.status(400).json({
        success: false,
        message:
          "departure_id, arrival_id and outbound_date are required",
      });
    }

    const flights = await getFlights({
      departure_id,
      arrival_id,
      outbound_date,
      adults,
      travel_class,
    });

    res.status(200).json({
      success: true,
      data: flights,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};