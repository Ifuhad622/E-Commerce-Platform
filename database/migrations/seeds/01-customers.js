exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('customers').del()
    .then(function () {
      // Inserts seed entries
      return knex('customers').insert([
        {name: 'John Doe', email: 'john.doe@example.com', address: '123 Main St', phone: '555-555-5555'},
        {name: 'Jane Smith', email: 'jane.smith@example.com', address: '456 Elm St', phone: '555-555-5556'}
      ]);
    });
};
