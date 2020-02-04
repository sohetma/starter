'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("users",{
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
        allowNull : false
      },
      createdAt : {
       type : Sequelize.DATE,
       defaultValue: Sequelize.NOW
     },
      updateAt: {
       type : Sequelize.DATE,
       defaultValue: Sequelize.NOW
     }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("users");
  }
};
