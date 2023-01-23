'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class CarClaim extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            CarClaim.belongsTo(models.Customer, {
                foreignKey: "customerId"
            })
            CarClaim.belongsTo(models.CarModel, {
                foreignKey: "carModelId"
            })
            CarClaim.belongsTo(models.CarInsuranceId, {
                foreignKey: "insuranceId"
            })
        }
    }

    CarClaim.init({
        customerId: DataTypes.INTEGER,
        insuranceId: DataTypes.INTEGER,
        carModelId: DataTypes.INTEGER,
        priceClaim: DataTypes.INTEGER,
        status: DataTypes.STRING,
        ownCarDamage: DataTypes.INTEGER,
        ownCarDamageSelf: DataTypes.INTEGER,
        windScreenDamage: DataTypes.INTEGER,
        towingService: DataTypes.INTEGER,
        theft: DataTypes.INTEGER,
        fire: DataTypes.INTEGER,
        disaster: DataTypes.INTEGER,
        otherCarDamage: DataTypes.INTEGER,
        otherPersonDamage: DataTypes.INTEGER,
        medicalExpenses: DataTypes.INTEGER,
        personAccidentCoverage: DataTypes.INTEGER,
        bailBondCoverage: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'CarClaim',
    });
    return CarClaim;
};