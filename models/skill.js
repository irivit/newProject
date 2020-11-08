'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Skill extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Skill.init({
    skillName: DataTypes.STRING,
    yearsOfExperience: DataTypes.INTEGER,
    referenceName: DataTypes.STRING,
    position: DataTypes.STRING,
    company: DataTypes.STRING,
    email: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    relationship: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Skill',
  });
  return Skill;
};