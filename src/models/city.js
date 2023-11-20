'use strict';
const {
  Model
} = require('sequelize');
// const airport = require('./airport');
module.exports = (sequelize, DataTypes) => {
  class City extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here : like City has many airports (from models)
     
    }
  }
  City.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique:'column',
      collate: 'utf8_general_ci', 
    },
  }, {
    sequelize,
    modelName: 'City',
  });
  return City;
};