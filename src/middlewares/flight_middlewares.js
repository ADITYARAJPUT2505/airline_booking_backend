const validateCreateFlight = (req, res, next) => {
  if (
    !req.body.flightNumber ||
    !req.body.airplaneId ||
    !req.body.departureAirportId ||
    !req.body.arrivalAirportId ||
    !req.body.arrivalTime ||
    !req.body.departureTime ||
    !req.body.price
  ) {
    //if any of the body param is missing we come inside
    return res.status(400).json({
      date: {},
      success: false,
      message: " invalid request body for  create fflight ",
      err: "missing mandatory properties to create a flight",
    });
  }
  next();
};

module.exports = {
  validateCreateFlight,
};
