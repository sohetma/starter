const environment = process.env
module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        idle: 20000,
        acquire: 20000
    }
  },
  test: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: 'test',
    host: process.env.DB_HOST,
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        idle: 20000,
        acquire: 20000
    }
  },
  production: {
    port: 5000,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    port: 3306,
    dialect: "mysql",
    port: 5000,
    pool: {
        max: 5,
        min: 0,
        idle: 20000,
        acquire: 20000
    }
  },

};
