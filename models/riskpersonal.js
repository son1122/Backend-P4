'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RiskPersonal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      RiskPersonal.belongsTo(models.CustomerInsurance, {
        foreignKey: "riskPersonalId"
      })
      RiskPersonal.hasOne(models.countryId, {
        foreignKey: "countryId"
      })
    }
  }

  RiskPersonal.init({
    countryId: DataTypes.INTEGER,
    value: DataTypes.INTEGER,
    year: DataTypes.INTEGER,
    customerId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'RiskPersonal',
  });
  return RiskPersonal;
};