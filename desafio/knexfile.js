// Update with your config settings.

module.exports = {
  client: 'mysql2',
  connection: {
    database: 'desafio-cap-04',
    user:     'intwone',
    password: 'root'
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }
};
