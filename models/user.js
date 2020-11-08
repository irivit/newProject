'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // User.belongsTo(models.User, {
      //   foreignKey: 'userId',
      //   onDelete: 'CASCADE'
      // })
      User.hasMany (models.Skill, {onDelete: 'SET NULL'});
      User.hasMany (models.Project, {onDelete: 'SET NULL'});
      User.hasMany (models.Preferences, {onDelete: 'SET NULL'});
      User.hasMany (models.Education, {onDelete: 'SET NULL'});
      User.hasMany (models.Experience, {onDelete: 'SET NULL'});
      User.hasMany (models.MSA, {onDelete: 'SET NULL'});
    }
  };
  User.init({
    fullName: DataTypes.STRING,
    address1: DataTypes.STRING,
    address2: DataTypes.STRING,
    country: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    zipcode: DataTypes.STRING,
    accountType: DataTypes.STRING,
    emailAddress: DataTypes.STRING,
    password: DataTypes.STRING,
    phoneNumber: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};