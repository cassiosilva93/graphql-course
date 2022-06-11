exports.up = function(knex) {
  return knex.schema.createTable('user_profile', table => {
    table.integer('user_id').unsigned()
    table.integer('profile_id').unsigned()
    table.foreign('user_id').references('user.id')
    table.foreign('profile_id').references('profile.id')
    table.primary(['user_id', 'profile_id'])
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('user_profile')
};
