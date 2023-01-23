'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('LocationIds', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            address: {
                type: Sequelize.STRING
            },
            mhuui: {
                type: Sequelize.INTEGER
            },
            village: {
                type: Sequelize.STRING
            },
            road: {
                type: Sequelize.STRING
            },
            subdistrict: {
                type: Sequelize.STRING
            },
            district: {
                type: Sequelize.STRING
            },
            province: {
                type: Sequelize.STRING
            },
            postalCode: {
                type: Sequelize.INTEGER
            },
            country: {
                type: Sequelize.STRING
            },
            lat: {
                type: Sequelize.DOUBLE
            },
            lng: {
                type: Sequelize.DOUBLE
            },
            customerId: {
                type: Sequelize.INTEGER
            },
            createdAt: {
                defaultValue: new Date(),
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                defaultValue: new Date(),
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('LocationIds');
    }
};