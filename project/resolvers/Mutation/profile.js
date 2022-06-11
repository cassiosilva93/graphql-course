const { nextProfileId, profiles } = require('../../data/db')

module.exports = {
  newProfile(_, { name }) {
    const profileExists = profiles.some(profile => profile.name === name.toLowerCase())

    if (profileExists) {
      throw new Error(`The profile ${name} already exists.`)
    }

    const profile = {
      id: nextProfileId(),
      name: name.toLowerCase(),
    }

    profiles.push(profile)
    return profile
  },

  deleteProfile(_, { name }) {
    const profileIndexFound = profiles.findIndex(profile => {
      return profile.name === name.toLowerCase()
    })
    
    if(profileIndexFound < 0) {
      return null
    }

    const [profileDeleted] = profiles.splice(profileIndexFound, 1)
    return profileDeleted
  },
}
