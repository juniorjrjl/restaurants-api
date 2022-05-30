'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('restaurants',[{
      name: 'Mexicanão',
      description: 'restaurante mexicano',
      phone: '(15)90542-3387',
      address: 'Rua Los Hermanos, número 43',
      created_at: new Date(),
      updated_at: new Date()
    },{
      name: 'Japa Restaurante',
      description: 'restaurante japones',
      phone: '(19)96087-5633',
      address: 'Rua Dois, número 77',
      created_at: new Date(),
      updated_at: new Date()
    }])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('restaurants', null, {})
  }
};
