const express = require("express");

const bodyparser = require("body-parser");

const { City, Airport } = require("./models/index");

const { PORT } = require("./config/server_config");

//const CityRepository =require('./repository/city_repository')

const db = require("./models/index");
const sequelize = require("sequelize");
const city = require("./models/city");

const ApiRoutes = require("./routes/index");

const setupAndStartServer = async () => {
  const app = express();

  app.use(bodyparser.json());
  app.use(bodyparser.urlencoded({ extended: true }));

  app.use("/api", ApiRoutes);

  app.listen(PORT, async () => {
    console.log(`server started at ${PORT}`);
    if (process.env.SYNC_DB) {
      db.sequelize.sync({ alter: true });
    }
    //     console.log(city, airport);
  });
};

setupAndStartServer();
