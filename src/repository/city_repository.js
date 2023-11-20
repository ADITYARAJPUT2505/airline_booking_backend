const { City } = require("../models/index");
const { Op } = require("sequelize");
class CityRepository {
  async createCity({ name }) {
    try {
      const city = await City.create({ name: name });
      return city;
    } catch (error) {
      console.log("something went wrong in the repo");
      throw { error };
    }
  }

  async deleteCity(cityid) {
    try {
      await City.destroy({
        where: {
          id: cityid,
        },
      });
      return true;
    } catch (error) {
      console.log("something went wrong in the repo");
      throw { error };
    }
  }

  async updateCity(cityid, { name }) {
    try {
      const city = await City.update(
        { name },
        {
          where: {
            id: cityid,
          },
        }
      );
      // const city = await City.findByPk(cityid);
      // city.name = data.name;
      // await city.save();
      return city;
    } catch (error) {
      console.log("something went wrong in the repo");
      throw { error };
    }
  }

  async getCity(cityid) {
    try {
      const city = await City.findByPk(cityid);
      return city;
    } catch (error) {
      console.log("something went wrong in the repo");
      throw { error };
    }
  }

  // async getAllCities(filter) {
  //   // filter can be empty also
  //   try {
  //     if (filter.name) {
  //       const cities = await City.findAll({
  //         where: {
  //           name: {
  //             [Op.startsWith]: filter.name,
  //           },
  //         },
  //       });
  //     }
  //     const cities = await City.findAll();
  //     return cities;
  //   } catch (error) {
  //     console.log("something went wrong in  repo");
  //     throw { error };
  //   }
  // }
  async getAllCities(filter) {
    try {
      if (filter && filter.name) {
        const cities = await City.findAll({
          where: {
            name: {
              [Op.startsWith]: filter.name,
            },
          },
        });
        return cities;
      } else {
        const cities = await City.findAll();
        return cities;
      }
    } catch (error) {
      console.log("something went wrong in  repo");
      throw { error };
    }
  }
}
module.exports = CityRepository;
