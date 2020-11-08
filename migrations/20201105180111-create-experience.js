'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Experiences', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      companyName: {
        type: Sequelize.STRING
      },
      employmentType: {
        type: Sequelize.STRING
      },
      location: {
        type: Sequelize.STRING
      },
      startDate: {
        type: Sequelize.DATEONLY
      },
      endDate: {
        type: Sequelize.DATEONLY
      },
      headline: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      experienceLevel: {
        type: Sequelize.STRING
      },
      primaryRol: {
        type: Sequelize.STRING
      },
      secondaryRol: {
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
    await queryInterface.dropTable('Experiences');
  }
};