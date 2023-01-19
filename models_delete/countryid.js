'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CountryId extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CountryId.init({
    countryCode: DataTypes.STRING,
    countryName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'CountryId',
  });
  return CountryId;
};