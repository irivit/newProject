'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Performances', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      assessmetDate: {
        type: Sequelize.DATEONLY
      },
      evaluationFrom: {
        type: Sequelize.DATEONLY
      },
      evaluationTo: {
        type: Sequelize.DATEONLY
      },
      question1: {
        type: Sequelize.STRING
      },
      grade1: {
        type: Sequelize.INTEGER
      },
      comment1: {
        type: Sequelize.STRING
      },
      question2: {
        type: Sequelize.STRING
      },
      grade2: {
        type: Sequelize.INTEGER
      },
      comment2: {
        type: Sequelize.STRING
      },
      question3: {
        type: Sequelize.STRING
      },
      grade3: {
        type: Sequelize.INTEGER
      },
      comment3: {
        type: Sequelize.STRING
      },
      question4: {
        type: Sequelize.STRING
      },
      grade4: {
        type: Sequelize.INTEGER
      },
      comment4: {
        type: Sequelize.STRING
      },
      question5: {
        type: Sequelize.STRING
      },
      grade5: {
        type: Sequelize.INTEGER
      },
      comment5: {
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
    await queryInterface.dropTable('Performances');
  }
};