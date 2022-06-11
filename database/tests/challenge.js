const database = require('../config/database')

async function saveUser({ name, email, password }) {
  const userExists = await database('user')
    .where({ email })
    .first()

  if (!!userExists) {
    await database('user')
      .update({ 
        name,
        email,
        password
      })
      .where({ id: userExists.id })

    const user = database('user')
      .where({ id: userExists.id })

    return user
  }

  const [id] = await database('user')
    .insert({
      name,
      email,
      password
    })

  const user = database('user')
    .where({ id })

  return user
}

async function saveProfile({ name, label }) {
  const profileExists = await database('profile')
    .where({ name })
    .first()

  if (!!profileExists) {
    await database('profile')
      .update({ 
        name,
        label
      })
      .where({ id: profileExists.id })

    const profile = database('profile')
      .where({ id: profileExists.id })

    return profile
  }

  const [id] = await database('profile')
    .insert({
      name,
      label
    })

  const profile = database('profile')
    .where({ id })

  return profile
}

async function addProfile({ user, ...profiles }) {
  // associar o usuário a um conjunto de perfil passado 
}

async function exec() {
  let inc = 1

  const user1 = await saveUser({ 
    name: `user${inc}`,
    email: `user${inc}@gmail.com`,
    password: '123456'
  })

  const pf1 =  await saveProfile({ 
    name: `rh${inc}`,
    label: 'Recursos humanos'
  })

  const pf2 =  await saveProfile({ 
    name: `financeiro${inc+inc}`,
    label: 'Financeiro'
  })

  inc++

  return await addProfile(user1, pf1, pf2)
}

exec()
  .then(result => console.log(result))
  .catch(error => console.log(error))
  .finally(() => database.destroy())