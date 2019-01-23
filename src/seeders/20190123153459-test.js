'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
     */
      
      return queryInterface.bulkInsert('dashboard', [{
        name: 'test dashboard',
        description: 'a test dashboard',
        userId: '123456'
      }], {}).bulkInsert('component', [{
        name: 'test component',
        description: 'a test component'
      }], {});
   
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
    */

      return queryInterface.bulkDelete('Dashboard', null, {})
        .bulkDelete('component', null, {});
    
  }
};
