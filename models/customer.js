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
            Customer.hasMany(models.CustomerInsurance, {
                foreignKey: "customerId"
            })
            Customer.hasMany(models.CustomerClaim, {
                foreignKey: "customerId"
            })
            Customer.hasMany(models.LocationId, {
                foreignKey: "customerId"
            })
        }
    }

    Customer.init({
        username: DataTypes.STRING,
        password: DataTypes.STRING,
        email: DataTypes.STRING,
        phone: DataTypes.STRING,
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        userIdType: DataTypes.INTEGER,
        userId: DataTypes.STRING,
        DOB: DataTypes.DATE
    }, {
        sequelize,
        modelName: 'Customer',
    });
    return Customer;
};