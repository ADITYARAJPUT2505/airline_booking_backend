const { Flights } = require("../models/index");
const { Op } = require("sequelize");

class FlightRepository {
  #createFilter(data) {
    let filter = {};
    if (data.arrivalAirportId) {
      filter.arrivalAirportId = data.arrivalAirportId;
    }
    if (data.departureAirportId) {
      filter.departureAirportId = data.departureAirportId;
    }
    if (data.minPrice && data.maxPrice) {
      Object.assign(filter, {
        [Op.and]: [
          { price: { [Op.lte]: data.maxPrice } },
          { price: { [Op.gte]: data.minPrice } },
        ],
      });
    }
    // if (data.minPrice) {
    //   Object.assign(filter, { price: { [Op.gte]: data.minPrice } });
    // }
    // if (data.maxPrice) {
    //   Object.assign(filter, { price: { [Op.gte]: data.maxPrice } });
    // }
    // Object.assign(filter, {
    //   [Op.and]: [{ price: { [Op.lte]: 10000 } }, { price: { [Op.gte]: 7000 } }],
    // });
    return filter;
  }
  async createFlight(data) {
    try {
      const flight = await Flights.create(data);
      return flight;
    } catch (error) {
      console.log("Error in createFlight repository layer:", error.message);
      throw error;
    }
  }

  async getFlight(FlightId) {
    try {
      const flight = await Flights.findByPk(FlightId);

      return flight;
    } catch (error) {
      console.log("Error in repository layer:", error.message);
      throw error;
    }
  }

  async getAllFlights(filter) {
    try {
      const filterobject = this.#createFilter(filter);
      const flight = await Flights.findAll({
        where: filterobject,
      });
      // console.log(flight);
      return flight;
    } catch (error) {
      console.log("Error in repository layer:", error.message);
      throw error;
    }
  }
}
module.exports = FlightRepository;
