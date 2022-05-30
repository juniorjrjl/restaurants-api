'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    const [customers] = await queryInterface.sequelize.query('SELECT id FROM customers;');
    const [restaurants] = await queryInterface.sequelize.query('SELECT id FROM restaurants;');
    await queryInterface.bulkInsert('evaluations',[{
      customer_id: customers[0].id,
      restaurant_id: restaurants[0].id,
      comment: 'muito bom :)',
      stars: 5,
      created_at: new Date(),
      updated_at: new Date()
    },{
      customer_id: customers[1].id,
      restaurant_id: restaurants[0].id,
      comment: 'bom',
      stars: 3,
      created_at: new Date(),
      updated_at: new Date()
    },{
      customer_id: customers[2].id,
      restaurant_id: restaurants[0].id,
      comment: 'não gostei',
      stars: 1,
      created_at: new Date(),
      updated_at: new Date()
    },{
      customer_id: customers[3].id,
      restaurant_id: restaurants[0].id,
      comment: 'mais ou menos',
      stars: 2,
      created_at: new Date(),
      updated_at: new Date()
    },{
      customer_id: customers[0].id,
      restaurant_id: restaurants[1].id,
      comment: 'péssimo',
      stars: 0,
      created_at: new Date(),
      updated_at: new Date()
    },{
      customer_id: customers[1].id,
      restaurant_id: restaurants[1].id,
      comment: 'ótimo',
      stars: 5,
      created_at: new Date(),
      updated_at: new Date()
    },{
      customer_id: customers[2].id,
      restaurant_id: restaurants[1].id,
      comment: 'poderia ser melhor',
      stars: 3,
      created_at: new Date(),
      updated_at: new Date()
    },{
      customer_id: customers[3].id,
      restaurant_id: restaurants[1].id,
      comment: 'bonzinho até',
      stars: 3,
      created_at: new Date(),
      updated_at: new Date()
    }])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('evaluations', null, {})
  }
};
