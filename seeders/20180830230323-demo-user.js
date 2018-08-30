'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {username: 'Mark Jackson'},
      {username: 'Marcus Price'},
      {username: 'Nolan Klinke'},
      {username: 'Delcie Dion'},
      {username: 'Jordon Bowen'},
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
