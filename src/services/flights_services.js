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
          error: "arrival time cant greater than departure time",
        };
      }
      const airplane = await this.airplaneRepository.getAirplane(
        data.airplaneId
      );
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
  async getFlightData() {
    //todo
  }
}

/**
 * {
 * flightNunmber,
 * airplaneId,
 * departureAirportId,
 * arrivalAirportId,
 * arrivalTime,
 * departueTime
 * price,
 * totalSeats -> airplane
 * }
 */

module.exports = FlightService;
