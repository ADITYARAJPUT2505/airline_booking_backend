// const { Airplane } = require("../models/index");

// class AirplaneRepository {
//   async getAirplane(id) {
//     try {
//       const airplane = await Airplane.findByPk(id);
//       return airplane;
//     } catch (error) {
//       console.log("Error in repository layer:", error.message);
//       throw error;
//     }
//   }
// }
const CrudRepository = require("./crud_repository");
const { Airplane } = require("../models/index");
class AirplaneRepository extends CrudRepository {
  constructor() {
    super(Airplane);
  }
}
module.exports = AirplaneRepository;
