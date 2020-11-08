'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MSA extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Operator
    }
  };
  MSA.init({
    msaId: DataTypes.STRING,
    dateAwarded: DataTypes.DATEONLY,
    dateExpire: DataTypes.DATEONLY,
    scopeOfService: DataTypes.STRING,
    minInsuranceRequired: DataTypes.INTEGER,
    country: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'MSA',
  });
  return MSA;
};