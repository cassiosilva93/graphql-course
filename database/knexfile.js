module.exports = {
  client: 'mysql2',
  connection: {
    host: "127.0.0.1",
    database: 'coder_course',
    user:     'intwone',
    password: 'root'
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  },
  seeds: {
    directory: './seeds'
  }
};
