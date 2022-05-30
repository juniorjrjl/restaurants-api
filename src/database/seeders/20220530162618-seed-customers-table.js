'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('customers',[{
      name: 'Maria',
      phone: '(11)90832-4387',
      created_at: new Date(),
      updated_at: new Date()
    },{
      name: 'Juca',
      phone: '(12)99887-3233',
      created_at: new Date(),
      updated_at: new Date()
    },{
      name: 'Zé',
      phone: '(21)90883-1145',
      created_at: new Date(),
      updated_at: new Date()
    },{
      name: 'Jão',
      phone: '(31)98873-0021',
      created_at: new Date(),
      updated_at: new Date()
    }])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('customers', null, {})
  }
};
