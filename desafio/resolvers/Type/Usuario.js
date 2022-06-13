const db = require("../../config/db");

module.exports = {
  async perfis(usuario) {
    const perfilId = await db("usuarios_perfis")
      .where({ usuario_id: usuario.id })
      .map((row) => row.perfil_id);

    const perfilName = [];

    for (const id of perfilId) {
      const name = await db("perfis").where({ id });
      perfilName.push(name);
    }

    return perfilName.map((perfil) => perfil[0]);
  },
};
