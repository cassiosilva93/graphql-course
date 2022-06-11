const { nextUserId, users } = require('../../data/db')

module.exports = {
  newUser(_, { data }) {
    const emailExists = users.some(user => user.email === data.email)

    if (emailExists) {
      throw new Error(`The email ${data.email} already exists.`)
    }

    const user = {
      id: nextUserId(),
      ...data,
      profile_id: 1,
      status: 'ACTIVE'
    }

    users.push(user)
    return user
  },

  deleteUser(_, { filter }) {
    const userIndexFound = users.findIndex(user => {
      return user.id === filter.id || user.email === filter.email
    })
    
    if(userIndexFound < 0) {
      return null
    }

    const [userDeleted] = users.splice(userIndexFound, 1)
    return userDeleted
  },

  updateUser(_, { data, filter }) {
    const userIndexFound = users.findIndex(user => {
      return user.id === filter.id || user.email === filter.email
    })

    if (userIndexFound < 0) {
      return null
    }

    const userUpdated = {
      ...users[0],
      ...data
    }

    users.splice(userIndexFound, 1, userUpdated)
    return userUpdated
  }
}