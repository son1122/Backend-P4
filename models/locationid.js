'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class LocationId extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            LocationId.belongsTo(models.Customer, {
                foreignKey: "customerId"
            })
        }
    }

    LocationId.init({
        address: DataTypes.STRING,
        mhuui: DataTypes.INTEGER,
        village: DataTypes.STRING,
        road: DataTypes.STRING,
        subdistrict: DataTypes.STRING,
        district: DataTypes.STRING,
        province: DataTypes.STRING,
        postalCode: DataTypes.INTEGER,
        country: DataTypes.STRING,
        lat: DataTypes.DOUBLE,
        lng: DataTypes.DOUBLE,
        customerId: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'LocationId',
    });
    return LocationId;
};