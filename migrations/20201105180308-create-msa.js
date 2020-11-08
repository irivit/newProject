'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('MSAs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      msaId: {
        type: Sequelize.STRING
      },
      dateAwarded: {
        type: Sequelize.DATEONLY
      },
      dateExpire: {
        type: Sequelize.DATEONLY
      },
      scopeOfService: {
        type: Sequelize.STRING
      },
      minInsuranceRequired: {
        type: Sequelize.INTEGER
      },
      country: {
        type: Sequelize.STRING
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('MSAs');
  }
};