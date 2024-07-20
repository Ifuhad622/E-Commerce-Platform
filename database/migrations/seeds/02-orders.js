exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('orders').del()
    .then(function () {
      // Inserts seed entries
      return knex('orders').insert([
        {customer_id: 1, products: JSON.stringify([{product_id: 1, quantity: 2}]), total: 100.00, status: 'pending'},
        {customer_id: 2, products: JSON.stringify([{product_id: 2, quantity: 1}]), total: 50.00, status: 'completed'}
      ]);
    });
};
