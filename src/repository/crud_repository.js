// const { model } = require("../models/index");
class CrudRepository {
  constructor(model) {
    this.model = model;
  }
  // async create(data) {
  //   try {
  //     //console.log("hello world");
  //     const result = await this.model.create(data);
  //     return result;
  //   } catch (error) {
  //     console.log("something went wrong in create crud repository layer");
  //     throw error;
  //   }
  // }
  async create(data) {
    try {
      console.log("Creating new record with data:", data);
      const result = await this.model.create(data);
      console.log("Record created successfully:", result);
      return result;
    } catch (error) {
      console.error("Error in create method:", error);
      throw error;
    }
  }

  async destroy(modelId) {
    try {
      const result = await this.model.destroy({
        where: {
          id: modelId,
        },
      });
      return result;
    } catch (error) {
      console.log("something went wrong in crud repository layer");
      throw error;
    }
  }
  async get(modelId) {
    try {
      const result = await this.model.findByPk(modelId);
      return result;
    } catch (error) {
      console.log("something went wrong in crud repository layer");
      throw error;
    }
  }
  async getAll() {
    try {
      const result = await this.model.findAll();
      return result;
    } catch (error) {
      console.log("something went wrong in crud repository layer");
      throw error;
    }
  }
  async update(modelId, data) {
    try {
      const result = await this.model.update(data, {
        where: {
          id: modelId,
        },
      });
      return result;
    } catch (error) {
      console.log("something went wrong in crud repository layer");
      throw error;
    }
  }
}

module.exports = CrudRepository;
