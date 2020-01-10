const Sequelize = require('sequelize');

module.export = (sequelize, Sequelize) => {
  const Client = sequelize.define("client",{
    id : {
      type : Sequelize.INTEGER(11),
      allowNull : false,
      autoIcrement : true,
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
