'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Projects', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      companyName: {
        type: Sequelize.STRING
      },
      primaryContribution: {
        type: Sequelize.STRING
      },
      highlights: {
        type: Sequelize.STRING
      },
      lowLights: {
        type: Sequelize.STRING
      },
      rol: {
        type: Sequelize.STRING
      },
      duts: {
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
    await queryInterface.dropTable('Projects');
  }
};