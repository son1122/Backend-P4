'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('CarInsuranceTypes', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            status: {
                type: Sequelize.STRING
            },
            title: {
                type: Sequelize.STRING
            },
            description: {
                type: Sequelize.STRING
            },
            type: {
                type: Sequelize.STRING
            },
            ownCarDamage: {
                type: Sequelize.BOOLEAN
            },
            ownCarDamageSelf: {
                type: Sequelize.BOOLEAN
            },
            windScreenDamage: {
                type: Sequelize.BOOLEAN
            },
            towingService: {
                type: Sequelize.BOOLEAN
            },
            theft: {
                type: Sequelize.BOOLEAN
            },
            fire: {
                type: Sequelize.BOOLEAN
            },
            disaster: {
                type: Sequelize.BOOLEAN
            },
            otherCarDamage: {
                type: Sequelize.BOOLEAN
            },
            otherPersonDamage: {
                type: Sequelize.BOOLEAN
            },
            medicalExpenses: {
                type: Sequelize.BOOLEAN
            },
            personAccidentCoverage: {
                type: Sequelize.BOOLEAN
            },
            bailBondCoverage: {
                type: Sequelize.BOOLEAN
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('CarInsuranceTypes');
    }
};