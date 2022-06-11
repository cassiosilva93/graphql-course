function nextUserId() {
  return users.length + 1
}

function nextProfileId() {
  return profiles.length + 1
}


const users = [
  {
    id: 1,
    name: 'Cassio Oliveira',
    email: 'cassio@gmail.com',
    age: 19,
    profile_id: 1,
    status: 'ACTIVE'
  },
  {
    id: 2,
    name: 'Elanne Oliveira',
    email: 'elanne@gmail.com',
    age: 23,
    profile_id: 2,
    status: 'INACTIVE'
  },
  {
    id: 3,
    name: 'Daniela Oliveira',
    email: 'dani@gmail.com',
    age: 30,
    profile_id: 1,
    status: 'BLOCKED'
  }
]

const profiles = [
  {
    id: 1,
    name: 'common'
  },
  {
    id: 2,
    name: 'admin'
  },
]

module.exports = {
  users,
  profiles,
  nextUserId,
  nextProfileId
}