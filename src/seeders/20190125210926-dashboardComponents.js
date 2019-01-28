'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('DashboardComponent', [{
      dashboardId: 1,
      componentId: 1,
      createdAt: '2019-01-25 18:37:12',
      updatedAt: '2019-01-25 18:37:12'
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('DashboardComponent', null, {})
        .bulkDelete('DasboardComponent', null, {});
  }
};
