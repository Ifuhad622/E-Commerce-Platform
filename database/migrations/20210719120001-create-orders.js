exports.up = function(knex) {
  return knex.schema.createTable('orders', function(table) {
    table.increments('id').primary();
    table.integer('customer_id').unsigned().notNullable();
    table.foreign('customer_id').references('customers.id');
    table.json('products').notNullable();
    table.decimal('total', 10, 2).notNullable();
    table.string('status').defaultTo('pending');
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('orders');
};
