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
    return queryInterface.dropTable("clients");
  }
};


module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Clients', // name of Source model
      'UserId', // name of the key we're adding
      {
        type: Sequelize.INTEGER(11),
        references: {
          model: 'users', // name of Target model
          key: 'id', // key in Target model that we're referencing
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'Clients', // name of Source model
      'userId' // key we want to remove
    );
  }
};
