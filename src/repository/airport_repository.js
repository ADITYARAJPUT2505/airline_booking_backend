const CrudRepository = require("./crud_repository");

class AirportRepository extends CrudRepository {
  constructor(model) {
    super(model);
  }
}
