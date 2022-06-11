const db = require("../../config/db");

module.exports = {
  async novoUsuario(_, { dados }) {
    let user = await db("usuarios").where({ email: dados.email });

    if (user.length !== 0) {
      throw new Error(`The email ${dados.email} already exists.`);
    }

    const [id] = await db("usuarios").insert({
      nome: dados.nome,
      email: dados.email,
      senha: dados.senha,
    });

    for (const perfil of dados.perfis) {
      await db("usuarios_perfis").insert({
        usuario_id: id,
        perfil_id: perfil.id
      })
    }

    user = await db("usuarios").where({ id }).first();
    return user;
  },

  async excluirUsuario(_, { filtro }) {
    let user_profile;
    let user;

    if (filtro.id) {
      user_profile = await db("usuarios_perfis").where({
        usuario_id: filtro.id,
      });
      if (user_profile.length !== 0) {
        await db("usuarios_perfis").where({ usuario_id: filtro.id }).delete();
      }
      user = await db("usuarios").where({ id: filtro.id }).first();
      await db("usuarios").where({ id: filtro.id }).delete();
      return user;
    }

    const { id } = await db("usuarios").where({ email: filtro.email }).first();

    user_profile = await db("usuarios_perfis").where({ usuario_id: id });
    if (user_profile.length !== 0) {
      await db("usuarios_perfis").where({ usuario_id: id }).delete();
    }
    user = await db("usuarios").where({ email: filtro.email }).first();
    await db("usuarios").where({ email: filtro.email }).delete();
    return user;
  },

  async alterarUsuario(_, { filtro, dados }) {
    let user

    if (filtro.id) {
      await db('usuarios').where({ id: filtro.id }).update({
        nome: dados.nome,
        email: dados.email,
        senha: dados.senha
      })

      if (dados.perfis !== 0) {
        await db("usuarios_perfis").where({ usuario_id: filtro.id }).delete();
        
        for (const perfil of dados.perfis) {
          await db("usuarios_perfis").insert({
            usuario_id: filtro.id,
            perfil_id: perfil.id
          })
        }
      }

      user = await db('usuarios').where({ id: filtro.id }).first()
      return user
    }

    const { id } = await db('usuarios').where({ email: filtro.email }).first()

    await db('usuarios').where({ email: filtro.email }).update({
      nome: dados.nome,
      email: dados.email,
      senha: dados.senha
    })

    if (dados.perfis !== 0) {
      await db("usuarios_perfis").where({ usuario_id: id }).delete();
      for (const perfil of dados.perfis) {
        await db("usuarios_perfis").insert({
          usuario_id: id,
          perfil_id: perfil.id
        })
      }
    }

    user = await db('usuarios').where({ email: dados.email }).first()
    return user
  },
};
