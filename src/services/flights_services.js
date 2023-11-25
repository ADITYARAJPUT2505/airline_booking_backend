const { FlightRepository, AirplaneRepository } = require("../repository/index");
const compareTime = require("../utils/helper");
const {} = require("../utils/helper");
class FlightService {
  constructor() {
    this.airplaneRepository = new AirplaneRepository();
    this.flightRepository = new FlightRepository();
  }
  async createFlight(data) {
    try {
      if (!compareTime(data.arrivalTime, data.departureTime)) {
        throw {
          error: "arrival time cant lesser than departure time",
        };
      }
      const airplane = await this.airplaneRepository.get(data.airplaneId);
      const flight = await this.flightRepository.createFlight({
        ...data,
        totalSeata: airplane.capacity,
      });
      return flight;
    } catch (error) {
      console.log("Error in services layer:", error.message);
      throw error;
    }
  }
  async getAllFlightData(data) {
    try {
      const flights = await this.flightRepository.getAllFlights(data);
      // console.log(flights);
      return flights;
    } catch (error) {
      console.log("Error in services layer:", error.message);
      throw error;
    }
  }
}

/**
 * {
 * flightNunmber,
 * airplaneId,
 * departureAirportId,
 * arrivalAirportId,
 * arrivalTime,
 * departureTime
 * price,
 * totalSeats -> airplane
 * }
 */

module.exports = FlightService;
