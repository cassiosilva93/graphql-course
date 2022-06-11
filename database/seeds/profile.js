exports.seed = function(knex) {
  return knex('profile').insert([
    { name: 'common', label: 'common' },
    { name: 'admin', label: 'administrator' },
    { name: 'master', label: 'master' },
  ])
};
