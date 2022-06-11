const db = require("../../config/db");

module.exports = {
  async usuarios() {
    const users = await db("usuarios");
    return users;
  },

  async usuario(_, { filtro }) {
    let user;

    if (filtro.id) {
      user = await db("usuarios").where({ id: filtro.id }).first();
      return user;
    }

    user = await db("usuarios").where({ email: filtro.email }).first();
    return user;
  },
};
