'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('CustomerInsurances', {
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
            insuranceType: {
                type: Sequelize.STRING
            },
            priceFinal: {
                type: Sequelize.INTEGER
            },
            status: {
                type: Sequelize.STRING
            },
            riskPersonalId: {
                type: Sequelize.INTEGER
            },
            riskLocalizationId: {
                type: Sequelize.INTEGER
            },
            startDate: {
                type: Sequelize.DATE
            },
            endDate: {
                type: Sequelize.DATE
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
        await queryInterface.dropTable('CustomerInsurances');
    }
};