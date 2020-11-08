'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Education', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      schoolName: {
        type: Sequelize.STRING
      },
      degree: {
        type: Sequelize.STRING
      },
      fieldOfStudy: {
        type: Sequelize.STRING
      },
      startYear: {
        type: Sequelize.INTEGER
      },
      endYear: {
        type: Sequelize.INTEGER
      },
      grade: {
        type: Sequelize.FLOAT
      },
      description: {
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
    await queryInterface.dropTable('Education');
  }
};