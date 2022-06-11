const database = require('../config/database')

// database('user')
//   .where({ id: 1 })
//   .delete()
//   .then((result) => console.log(result))
//   .finally(() => database.destroy())

database('profile')
  .delete()
  .then((result) => console.log(result))
  .finally(() => database.destroy())