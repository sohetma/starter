const Sequelize = require('sequelize');


const dbConfig = require("../config/config.json");

const sequelize = new Sequelize(
  'game',
  'root',
  'Slbd,cb10', {
    host: 'localhost',
    dialect: 'mysql'
  });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.client = require("./client.js");

module.exports = db;
global.sequelize = sequelize;
