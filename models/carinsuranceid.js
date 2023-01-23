'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class CarInsuranceId extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            CarInsuranceId.belongsTo(models.CarModel, {
                foreignKey: "carModelId"
            })
            CarInsuranceId.belongsTo(models.CarInsuranceType, {
                foreignKey: "carInsuranceTypeId"
            })
            CarInsuranceId.belongsToMany(models.Customer, {
                through: "CustomerInsurance",
                foreignKey: "insuranceId",
                otherKey: "customerId",
            })
        }
    }

    CarInsuranceId.init({
        carModelId: DataTypes.INTEGER,
        carInsuranceTypeId: DataTypes.INTEGER,
        price: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'CarInsuranceId',
    });
    return CarInsuranceId;
};