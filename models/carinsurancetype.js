'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class CarInsuranceType extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }

    CarInsuranceType.init({
        status: DataTypes.STRING,
        title: DataTypes.STRING,
        description: DataTypes.STRING,
        type: DataTypes.STRING,
        ownCarDamage: DataTypes.BOOLEAN,
        ownCarDamageSelf: DataTypes.BOOLEAN,
        windScreenDamage: DataTypes.BOOLEAN,
        towingService: DataTypes.BOOLEAN,
        theft: DataTypes.BOOLEAN,
        fire: DataTypes.BOOLEAN,
        disaster: DataTypes.BOOLEAN,
        otherCarDamage: DataTypes.BOOLEAN,
        otherPersonDamage: DataTypes.BOOLEAN,
        medicalExpenses: DataTypes.BOOLEAN,
        personAccidentCoverage: DataTypes.BOOLEAN,
        bailBondCoverage: DataTypes.BOOLEAN
    }, {
        sequelize,
        modelName: 'CarInsuranceType',
    });
    return CarInsuranceType;
};