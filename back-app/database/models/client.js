'use strict';
const Sequelize = require('sequelize');

module.exports = (sequelize, Sequelize) => {
  const Client = sequelize.define("clients",{
    id : {
      type : Sequelize.INTEGER(11),
      allowNull : false,
      autoIncrement : true,
      primaryKey : true
    },
    firstname :  {
      type : Sequelize.STRING(30),
      allowNull : false
    },
    lastname :  Sequelize.STRING(30),
    email :  Sequelize.STRING(30)
  });
  return Client;
};
