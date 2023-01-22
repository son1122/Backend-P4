'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([queryInterface.addColumn(
        'CustomerInsurances',
        'plate',
        Sequelize.STRING
    ),
      queryInterface.addColumn(
          'CustomerInsurances',
          'province',
          Sequelize.STRING
      )])
  },

  async down (queryInterface, Sequelize) {
    return Promise.all([queryInterface.removeColumn(
        'CustomerInsurances',
        'plate',
    ),queryInterface.removeColumn(
        'CustomerInsurances',
        'province',
    )])
  }
};
