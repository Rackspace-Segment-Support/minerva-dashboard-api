'use strict';
module.exports = (sequelize, DataTypes) => {
  const Dashboard = sequelize.define('Dashboard', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    userId:DataTypes.STRING
  }, {});
  
  return Dashboard;
};