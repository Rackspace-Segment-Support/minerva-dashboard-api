'use strict';

/**
 * @name Component
 * @description
 * Model object for Component db objects.
 * This currently uses sequelize.js
 * @param sequelize instance of sequelize
 * @param DataTypes object mapping of the different db data types
 * @returns Model object for components
 */
module.exports = (sequelize, DataTypes) => {
  const Component = sequelize.define('Component', {
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});

  return Component;
};