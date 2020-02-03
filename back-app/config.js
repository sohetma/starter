const environment = process.env
module.exports = {
  development: {
    port: 5000,
    database: {
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
    }
  },
  test: {
      port: 5000,
      database: {
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
      }
    },
  production: {
    port: process.env.PORT || 8080,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    host: "127.0.0.1",
    dialect: 'mysql',
  },
};
