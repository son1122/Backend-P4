'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('CarClaims', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            customerId: {
                type: Sequelize.INTEGER
            },
            insuranceId: {
                type: Sequelize.INTEGER
            },
            carModelId: {
                type: Sequelize.INTEGER
            },
            priceClaim: {
                type: Sequelize.INTEGER
            },
            status: {
                type: Sequelize.STRING
            },
            ownCarDamage: {
                type: Sequelize.INTEGER
            },
            ownCarDamageSelf: {
                type: Sequelize.INTEGER
            },
            windScreenDamage: {
                type: Sequelize.INTEGER
            },
            towingService: {
                type: Sequelize.INTEGER
            },
            theft: {
                type: Sequelize.INTEGER
            },
            fire: {
                type: Sequelize.INTEGER
            },
            disaster: {
                type: Sequelize.INTEGER
            },
            otherCarDamage: {
                type: Sequelize.INTEGER
            },
            otherPersonDamage: {
                type: Sequelize.INTEGER
            },
            medicalExpenses: {
                type: Sequelize.INTEGER
            },
            personAccidentCoverage: {
                type: Sequelize.INTEGER
            },
            bailBondCoverage: {
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
        await queryInterface.dropTable('CarClaims');
    }
};