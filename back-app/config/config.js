const dbConfig = require("../db.config.js");

module.exports = {
  development: {
    "username": dbConfig.USER,
    "password": dbConfig.PASSWORD,
    "database": dbConfig.DB,
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": false
  },
  test: {
    "username": dbConfig.USER,
    "password": dbConfig.PASSWORD,
    "database": dbConfig.DB,
    "host": "127.0.0.1",
    dialect: 'mysql',
  },
  production: {
    "username": dbConfig.USER,
    "password": dbConfig.PASSWORD,
    "database": dbConfig.DB,
    "host": "127.0.0.1",
    dialect: 'mysql',
  },
};
