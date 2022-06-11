const db = require("../../config/db");

module.exports = {
  async novoPerfil(_, { dados }) {
    const perfis = await db("perfis").where({ nome: dados.nome }).first();

    if (perfis) {
      throw new Error(`The profile ${dados.nome} already exists.`);
    }

    const [id] = await db("perfis").insert({
      nome: dados.nome,
      rotulo: dados.rotulo,
    });

    const perfil = await db("perfis").where({ id }).first();
    return perfil;
  },

  async excluirPerfil(_, { filtro }) {
    let perfil;

    if (filtro.id) {
      perfil = await db("perfis").where({ id: filtro.id }).first();
      await db("usuarios_perfis").where({ perfil_id: filtro.id }).delete();
      await db("perfis").where({ id: filtro.id }).delete();
      return perfil;
    }

    perfil = await db("perfis").where({ nome: filtro.nome }).first();
    await db("usuarios_perfis").where({ perfil_id: perfil.id }).delete();
    await db("perfis").where({ nome: filtro.nome }).delete();
    return perfil;
  },

  async alterarPerfil(_, { filtro, dados }) {
    let perfil;

    if (filtro.id) {
      perfil = await db("perfis").where({ id: filtro.id }).first();

      if (!perfil) {
        throw new Error("This profile does not exists");
      }

      await db("perfis").where({ id: perfil.id }).update({
        nome: dados.nome,
        rotulo: dados.rotulo,
      });

      perfil = await db("perfis").where({ id: filtro.id }).first();
      return perfil;
    }

    perfil = await db("perfis").where({ nome: filtro.nome }).first();

    if (!perfil) {
      throw new Error("This profile does not exists");
    }

    await db("perfis").where({ nome: perfil.nome }).update({
      nome: dados.nome,
      rotulo: dados.rotulo,
    });

    perfil = await db("perfis").where({ nome: dados.nome }).first();
    return perfil;
  },
};
