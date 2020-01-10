'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("clients",{
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
      createdAt : Sequelize.DATE,
      updateAt: Sequelize.DATE
    },
    {
      timestamps: false
    }
  );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("clients");
  }
};
