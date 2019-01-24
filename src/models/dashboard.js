'use strict';

/**
 * @name dashboard
 * @description
 * Model object for dashboard db objects.
 * This currently uses sequelize.js
 * @param sequelize instance of sequelize
 * @param DataTypes object mapping of the different db data types
 * @returns Model object for dashboard
 */
module.exports = (sequelize, DataTypes) => {
  const Dashboard = sequelize.define('Dashboard', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    userId:DataTypes.STRING
  }, {});
  
  return Dashboard;
};