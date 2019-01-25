'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
     */
      
      return queryInterface.bulkInsert('Dashboards', [{
        name: 'test dashboard',
        description: 'a test dashboard',
        userId: '123456',
        createdAt: '2019-01-25 18:37:12',
        updatedAt: '2019-01-25 18:37:12'
      }], {});
   
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
    */

      return queryInterface.bulkDelete('Dashboards', null, {})
        .bulkDelete('Dashboards', null, {});
    
  }
};
