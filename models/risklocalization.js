'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RiskLocalization extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      RiskLocalization.hasMany(models.CustomerInsurance, {
        foreignKey: "riskPersonalId"
      })
      RiskLocalization.belongsTo(models.CountryId, {
        foreignKey: "countryId"
      })
    }
  }

  RiskLocalization.init({
    countryId: DataTypes.INTEGER,
    value: DataTypes.INTEGER,
    year: DataTypes.INTEGER,
    healthRisk: DataTypes.INTEGER,
    carRisk: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'RiskLocalization',
  });
  return RiskLocalization;
};