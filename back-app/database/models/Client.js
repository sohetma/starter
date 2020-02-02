'use strict';
const Sequelize = require('sequelize');
var db = require('./index');
var sequelize = db.sequelize;
console.log(sequelize)

const Client = sequelize.define("clientlists",{
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
    email :  Sequelize.STRING(30),
    createdAt : {
     type : Sequelize.DATE,
     defaultValue: sequelize.literal('NOW()')
   },
    updateAt: {
     type : Sequelize.DATE,
     defaultValue: sequelize.literal('NOW()')
   }
  },
  {
    timestamps: false
  }
);

   // Client.associate = function(models) {};

module.exports = Client;
