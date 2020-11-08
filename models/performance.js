'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Performance extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Performance.init({
    assessmetDate: DataTypes.DATEONLY,
    evaluationFrom: DataTypes.DATEONLY,
    evaluationTo: DataTypes.DATEONLY,
    question1: DataTypes.STRING,
    grade1: DataTypes.INTEGER,
    comment1: DataTypes.STRING,
    question2: DataTypes.STRING,
    grade2: DataTypes.INTEGER,
    comment2: DataTypes.STRING,
    question3: DataTypes.STRING,
    grade3: DataTypes.INTEGER,
    comment3: DataTypes.STRING,
    question4: DataTypes.STRING,
    grade4: DataTypes.INTEGER,
    comment4: DataTypes.STRING,
    question5: DataTypes.STRING,
    grade5: DataTypes.INTEGER,
    comment5: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Performance',
  });
  return Performance;
};