const environment = process.env
module.exports = {
  development: {
    port: 3000,
    url: `mysql://${environment.DB_USER}:${environment.DB_PASSWORD}@${environment.DB_HOST}/${environment.DB_DATABASE}`,
    dialect: "mysql",
    pool: {
        maxConnections: 5,
        maxIdleTime: 30
    },
  },
  test: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    host: "127.0.0.1",
      dialect: 'mysql',
    },
  production: {
    port: process.env.PORT || 8080,
    saltingRounds: 10,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    host: "127.0.0.1",
    dialect: 'mysql',
  },
};
