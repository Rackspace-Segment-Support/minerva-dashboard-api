'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Components', [{
      name: 'test component',
      description: 'a test component',
      createdAt: '2019-01-25 18:37:12',
      updatedAt: '2019-01-25 18:37:12'
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Components', null, {})
        .bulkDelete('Components', null, {});
  }
};
