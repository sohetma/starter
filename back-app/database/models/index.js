'use strict';
const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require("../../config.js")[env];
const db = {};

let sequelize;
if (config.environment === 'production') {
  sequelize = new Sequelize(
      process.env[config.use_env_variable], config
    );
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS, {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      dialect: 'mysql',
      logging: true
    }
  );
} else {
  sequelize = new Sequelize(
     config.database, config.username, config.password, config
  );
}


db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
