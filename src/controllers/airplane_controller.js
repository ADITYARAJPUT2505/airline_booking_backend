const { AirplaneService } = require("../services/index");

const airplaneService = new AirplaneService();

const create = async (req, res) => {
  try {
    const response = await airplaneService.create(req.body);
    return res.status(201).json({
      data: response,
      success: true,
      message: "successfully airplane ",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "not able to create a airport",
      err: error,
    });
  }
};

// const destroy = async (req, res) => {
//   try {
//     const response = await cityService.deleteCity(req.params.id);
//     return res.status(200).json({
//       data: response,
//       success: true,
//       message: "successfully deleted a city",
//       err: {},
//     });
//   } catch (error) {
//     console.log(error);
//     return res.status(500).json({
//       data: {},
//       success: false,
//       message: "not able to delete a city",
//       err: error,
//     });
//   }
// };
// const get = async (req, res) => {
//   try {
//     const response = await cityService.getCity(req.params.id);
//     return res.status(200).json({
//       data: response,
//       success: true,
//       message: "successfully got a city",
//       err: {},
//     });
//   } catch (error) {
//     console.log(error);
//     return res.status(500).json({
//       data: {},
//       success: false,
//       message: "not able to get a city",
//       err: error,
//     });
//   }
// };
// const update = async (req, res) => {
//   try {
//     const response = await cityService.updateCity(req.params.id, req.body);
//     return res.status(200).json({
//       data: response,
//       success: true,
//       message: "successfully updated a city",
//       err: {},
//     });
//   } catch (error) {
//     console.log(error);
//     return res.status(500).json({
//       data: {},
//       success: false,
//       message: "not able to update a city",
//       err: error,
//     });
//   }
// };

// const getAll = async (req, res) => {
//   try {
//     const cities = await cityService.getAllCities(req.query);
//     return res.status(200).json({
//       data: cities,
//       success: true,
//       message: "successfully fetched all cities",
//       err: {},
//     });
//   } catch (error) {
//     return res.status(500).json({
//       data: {},
//       success: false,
//       message: "not able to fetch city",
//       err: error,
//     });
//   }
// };

module.exports = {
  create,
  // destroy,
  // get,
  // update,
  // getAll,
};
