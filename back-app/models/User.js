'use strict';
const Sequelize = require('sequelize');
var db = require('../database/index');
var sequelize = db.sequelize;

const User = sequelize.define("users",{
    id : {
      type : Sequelize.INTEGER(11),
      allowNull : false,
      autoIncrement : true,
      primaryKey : true
    },
    lastname :  {
      type : Sequelize.STRING(30),
      allowNull : false
    },
    firstname :  {
      type : Sequelize.STRING(30),
      allowNull : true
    },
    createdAt : {
     type : Sequelize.DATE,
     defaultValue: Sequelize.NOW
   },
    updateAt: {
     type : Sequelize.DATE,
     defaultValue: Sequelize.NOW
   }
  },
  {
    timestamps: false
  }
);

   // associations
  User.associate = models => {
    User.hasMany(models.Client);
  };


module.exports = User;
