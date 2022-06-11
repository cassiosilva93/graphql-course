## Utilizando fragments

```graphql
fragment completeUser on User {
  id
  name
  email
  salary
  vip 
  profile {
    id name
  }
}
```

Com o fragment `completeUser` poderemos utilizar em várias querys
para que seja retornado as informações de id, name, email, salary, vip de user e id, name de profile

> Utilizando o fragment:

```graphql
user(id: 3) {
  ...completeUser
}
```

> Utilizando os args nas mutations: 

1° forma:


```graphql
  newUser(_, { name, email, age }) {
    const user = {
      id: nextId(),
      name,
      email,
      age,
      profile_id: 1,
      status: 'ACTIVE'
    }

    users.push(user)
    return user
  }
```

2° forma: 

```graphql
  newUser(_, args) {
    const emailExists = users.some(user => user.email === args.email)

    if (emailExists) {
      throw new Error(`The email ${args.email} already exists.`)
    }

    const user = {
      id: nextId(),
      ...args,
      profile_id: 1,
      status: 'ACTIVE'
    }

    users.push(user)
    return user
  }
```

> Utilizando inputs:

Usando com base a `Mutation` de User, tínhamos o seguinte: 

Sem a utilização dos inputs

arquivo: schema/Mutation.graphql 

```graphql
type Mutation {
  newUser(
    name: String
    email: String
    age: Int
  ): User!
  deleteUser(id: Int!): User
  updateUser(
    id: Int!
    name: String
    email: String
    age: Int
  ): User
}

```

Com a utilização dos inputs

arquivo: schema/User.graphql 

```graphql
input UserInput {
  name: String
  email: String
  age: Int
}

```

arquivo: schema/Mutation.graphql 

```graphql
type Mutation {
  newUser(
    data: UserInput!
  ): User!
  deleteUser(id: Int!): User
  updateUser(
    id: Int!
    name: String
    email: String
    age: Int
  ): User
}
```

arquivo: resolvers/Mutation.js

```js
newUser(_, { data }) {
  const emailExists = users.some(user => user.email === data.email)

  if (emailExists) {
    throw new Error(`The email ${data.email} already exists.`)
  }

  const user = {
    id: nextId(),
    ...data,
    profile_id: 1,
    status: 'ACTIVE'
  }

  users.push(user)
  return user
},
```

Utilizando a chamada pelo client do Apollo

```graphql
newUser(
  data: {
    name: "Elanne"
    email: "el@gmail.com"
    age: 30
  } 
) {
  id
  status
  email
  name
}
```