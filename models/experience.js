'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Experience extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Experience.init({
    title: DataTypes.STRING,
    companyName: DataTypes.STRING,
    employmentType: DataTypes.STRING,
    location: DataTypes.STRING,
    startDate: DataTypes.DATEONLY,
    endDate: DataTypes.DATEONLY,
    headline: DataTypes.STRING,
    description: DataTypes.STRING,
    experienceLevel: DataTypes.STRING,
    primaryRol: DataTypes.STRING,
    secondaryRol: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Experience',
  });
  return Experience;
};