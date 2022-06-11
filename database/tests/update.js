const database = require('../config/database')

const newUser = {
  name: 'Novo Usuário',
  email: `${Math.floor(Math.random()*100)}@gmail.com`,
  password: '123456'
}

async function exercice() {
  const [result] = await database('user')
    .count('* as quantity')

  if (result.quantity < 10) {
    await database('user').insert(newUser)
  }

  await database('user')
    .where({ id: 2 })
    .update({ 
      name: 'Nome alterado',
      email: 'nomealterado@gmail.com'
    })
  
  const user = await database('user').where({ id: 2 })
  return user
}

exercice()
  .then((result) => console.log(result))
  .finally(() => database.destroy())