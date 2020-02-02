'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("clientlists",{
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
       defaultValue: Sequelize.literal('NOW()')
     },
      updateAt: {
       type : Sequelize.DATE,
       defaultValue: Sequelize.literal('NOW()')
     }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("clientlists");
  }
};
