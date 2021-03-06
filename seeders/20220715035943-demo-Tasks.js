'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('Tasks',[{
    Description: 'Meditar',
    Done: true,
    createdAt: new Date(),
    updatedAt:  new Date()
   },{
    Description: 'Caminhar',
    Done: true,
    createdAt: new Date(),
    updatedAt:  new Date()
   }], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
