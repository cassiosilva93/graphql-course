exports.up = function(knex) {
  return knex.schema.createTable('user', table => {
    table.increments('id').primary()
    table.string('name').notNull()
    table.string('email').notNull().unique()
    table.string('password', 60).notNull()
    table.boolean('status').notNull().defaultTo(true)
    table.timestamp('created_at').defaultTo(knex.fn.now())
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('user')
};
