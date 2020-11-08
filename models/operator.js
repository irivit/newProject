'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Operator extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Operator.hasMany (models.MSA, {onDelete: 'SET NULL'});
    }
  };
  Operator.init({
    name: DataTypes.STRING,
    sector: DataTypes.STRING,
    industry: DataTypes.STRING,
    country: DataTypes.STRING,
    marketCAP: DataTypes.INTEGER,
    companySize: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Operator',
  });
  return Operator;
};