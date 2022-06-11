const { profiles } = require('../../data/db')

module.exports = {
  profile(user) {
    const profileFound = profiles.find(profile => profile.id === user.profile_id)
    return profileFound
  },

  profiles() {
    return profiles
  },

  profile(_, args) {
    const profileFound = profiles.find(profile => {
      return args.name === profile.name
    })

    return profileFound
  }
}