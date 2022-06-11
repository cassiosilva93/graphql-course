const database = require('../config/database')

// database('profile')
//   .then(result => result.map(profile => profile.name))
//   .then(names => console.log(names))
//   .finally(() => database.destroy())

// database('profile')
//   .select('name', 'id')
//   .then(result => console.log(result))
//   .finally(() => database.destroy())

// database.select('name')
//   .from('profile')
//   .then(result => console.log(result))
//   .finally(() => database.destroy())

// database('profile')
//   .where({ id: 2 })
//   .first()
//   .then(result => console.log(result))
//   .finally(() => database.destroy())

// database('profile')
//   .where('id', '=', 2)
//   .first()
//   .then(result => console.log(result))
//   .finally(() => database.destroy())

// database('profile')
//   .where('name', 'like', '%r')
//   .then(result => console.log(result))
//   .finally(() => database.destroy())

database('profile')
  .whereNot({ id: 2 })
  .then(result => console.log(result))
  .finally(() => database.destroy())