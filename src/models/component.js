'use strict';
module.exports = (sequelize, DataTypes) => {
  const Component = sequelize.define('Component', {
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});

  return Component;
};