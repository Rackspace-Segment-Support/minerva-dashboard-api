'use strict';

const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('../../src/config/config.js')[env];
const db = {};

let conn;
conn = new Sequelize(config.database, config.username, config.password, config);

db.conn = conn;
db.Sequelize = Sequelize;

// Models
db.dashboard = require('../../src/models/dashboard')(conn, Sequelize);
db.component = require('../../src/models/component')(conn, Sequelize);

// Relationships
db.component.belongsToMany(db.dashboard, { through: 'DashboardComponent', foreignKey: 'componentId', otherKey: 'dashboardId' });
db.dashboard.belongsToMany(db.component, { through: 'DashboardComponent', foreignKey: 'dashboardId', otherKey: 'componentId' });

module.exports = db;
