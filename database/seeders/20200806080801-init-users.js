'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [{
      name: 'yy',
      age:1,
      created_at: new Date(),
      updated_at: new Date()
    },{
      name: 'll',
      age:2,
      created_at: new Date(),
      updated_at: new Date()
    }],{});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};

