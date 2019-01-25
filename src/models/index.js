'use strict';

/**
 * @name index
 * @description
 * Main DAL object that encapsulates each model into itself.
 * The idea here is that accessing models are done through
 * this module. It also ensures that a proper connection is 
 * made to the databse based on your current env.
 * @requires '../../src/config/config.js' config object for DB environments
 * @requires process.env.NODE_ENV node environemnt object. Maps to DB environments
 * @returns Parent object for all models
 */
const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('../../src/config/config.json')[env];
const db = {};

let conn;
conn = new Sequelize(config.database, config.username, config.password, config);

db.conn = conn;
db.Sequelize = Sequelize;

// Models
db.dashboard = require('../../src/models/dashboard')(conn, Sequelize);
db.component = require('../../src/models/component')(conn, Sequelize);

// Relationships
// When two models, defined by 'belongsToMany', point to each other a thrid table is created during a db sync
// This table is a XREF table for a many-to-many relationship
db.component.belongsToMany(db.dashboard, { through: 'DashboardComponent', foreignKey: 'componentId', otherKey: 'dashboardId' });
db.dashboard.belongsToMany(db.component, { through: 'DashboardComponent', foreignKey: 'dashboardId', otherKey: 'componentId' });

module.exports = db;
