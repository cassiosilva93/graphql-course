const database = require('../config/database')

const newProfile = {
  name: 'reader',
  label: 'Reader'
}

// database('profile').insert(newProfile)
//   .then(profile => console.log(profile))
//   .catch(error => console.log(error.sqlMessage))
//   .finally(() => database.destroy())

const sudoProfile = {
  name: `root${Math.random()}`,
  label: 'super user'
}

database.insert(sudoProfile).into('profile')
  .then(profile => profile[0])
  .then(id => `O usuário tem o id: ${id}`)
  .then(msg => console.log(msg))
  .catch(error => console.log(error.sqlMessage))
  .finally(() => database.destroy())