const { City } = require("../models/index");

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
}
module.exports = CityRepository;
