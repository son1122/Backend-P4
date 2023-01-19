'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Customer extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Customer.hasMany(models.CarClaim, {
                foreignKey: "customerId"
            })
            Customer.hasMany(models.LocationId, {
                foreignKey: "locationId"
            })
            Customer.belongsToMany(models.CustomerInsurance, {
                through:"CustomerInsurance",
                foreignKey:"customerId",
                otherKey:"insuranceId",
            })
        }
    }

    Customer.init({
        username: DataTypes.STRING,
        password: DataTypes.STRING,
        email: DataTypes.STRING,
        phone: DataTypes.STRING,
        firstname: DataTypes.STRING,
        lastname: DataTypes.STRING,
        userIdType: DataTypes.INTEGER,
        userId: DataTypes.STRING,
        DOB: DataTypes.DATE
    }, {
        sequelize,
        modelName: 'Customer',
    });
    return Customer;
};