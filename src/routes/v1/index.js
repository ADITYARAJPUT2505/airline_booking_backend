const express = require("express");

const Citycontroller = require("../../controllers/city_controllers");

const flightController = require("../../controllers/flight_controller");
const router = express.Router();

router.post("/city", Citycontroller.create);
router.delete("/city/:id", Citycontroller.destroy);
router.get("/city/:id", Citycontroller.get);
router.patch("/city/:id", Citycontroller.update);
router.get("/city", Citycontroller.getAll);

router.post("/flights", flightController.create);
router.get("/flights", flightController.getAll);

module.exports = router;
