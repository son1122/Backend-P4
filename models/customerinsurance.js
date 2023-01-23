'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CustomerInsurance extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      CustomerInsurance.belongsTo(models.Customer, {
        foreignKey: "customerId"
      })
      CustomerInsurance.belongsTo(models.CarInsuranceId, {
        foreignKey: "insuranceId"
      })
      CustomerInsurance.belongsTo(models.RiskLocalization, {
        foreignKey: "riskLocalizationId"
      })
      CustomerInsurance.belongsTo(models.RiskPersonal, {
        foreignKey: "riskPersonalId"
      })

    }
  }

  CustomerInsurance.init({
    customerId: DataTypes.INTEGER,
    insuranceId: DataTypes.INTEGER,
    insuranceType: DataTypes.STRING,
    priceFinal: DataTypes.INTEGER,
    status: DataTypes.STRING,
    riskPersonalId: DataTypes.INTEGER,
    riskLocalizationId: DataTypes.INTEGER,
    plate:DataTypes.STRING,
    province:DataTypes.STRING,
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'CustomerInsurance',
  });
  return CustomerInsurance;
};