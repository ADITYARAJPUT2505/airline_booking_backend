const express = require("express");

const { FlightMiddlewares } = require("../../middlewares/index");

const Citycontroller = require("../../controllers/city_controllers");

const flightController = require("../../controllers/flight_controller");

const airportController = require("../../controllers/airport_controller");

const airplaneController = require("../../controllers/airplane_controller");
const router = express.Router();

router.post("/city", Citycontroller.create);
router.delete("/city/:id", Citycontroller.destroy);
router.get("/city/:id", Citycontroller.get);
router.patch("/city/:id", Citycontroller.update);
router.get("/city", Citycontroller.getAll);

router.post(
  "/flights",
  FlightMiddlewares.validateCreateFlight,
  flightController.create
);
router.get("/flights", flightController.getAll);

router.post("/airports", airportController.create);

router.post("/airplanes", airplaneController.create);
module.exports = router;
