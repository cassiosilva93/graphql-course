const db = require("../../config/db");

module.exports = {
  async perfis() {
    const perfis = await db("perfis");
    return perfis;
  },
  async perfil(_, { filtro }) {
    let perfil;

    if(Object.keys(filtro).length === 0) return null

    if (filtro.id) {
      perfil = await db("perfis").where({ id: filtro.id }).first();
      return perfil;
    }

    perfil = await db("perfis").where({ nome: filtro.nome }).first();
    return perfil;
  },
};
