'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CarModel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      CarModel.hasMany(models.CarInsuranceId, {
        foreignKey: "carModelId"
      })
      CarModel.hasMany(models.CarClaim, {
        foreignKey: "carModelId"
      })
    }
  }

  CarModel.init({
    year: DataTypes.INTEGER,
    model: DataTypes.STRING,
    brand: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'CarModel',
  });
  return CarModel;
};