const { users } = require('../../data/db')

module.exports = {
  users() {
    return users
  },

  user(_, args) {
    const userFound = users.find(user => {
      return Number(args.id) === user.id
    })

    return userFound
  },
}