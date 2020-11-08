'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Education extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Education.init({
    schoolName: DataTypes.STRING,
    degree: DataTypes.STRING,
    fieldOfStudy: DataTypes.STRING,
    startYear: DataTypes.INTEGER,
    endYear: DataTypes.INTEGER,
    grade: DataTypes.FLOAT,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Education',
  });
  return Education;
};