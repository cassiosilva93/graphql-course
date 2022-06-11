exports.seed = async function(knex) {
  return knex('user').insert([
    { 
      name: 'Cassio Oliveira Silva', 
      email: 'cos@gmail.com' ,
      password: '123456',
      status: true
    },
    { 
      name: 'Elanne Pereira', 
      email: 'ep@gmail.com' ,
      password: '123456',
      status: false
    },
    { 
      name: 'Catia da Silva', 
      email: 'cds@gmail.com' ,
      password: '123456',
      status: true
    },
    { 
      name: 'João Menezes', 
      email: 'jm@gmail.com' ,
      password: '123456',
      status: false
    },
    { 
      name: 'Maria Aparecida', 
      email: 'ma@gmail.com' ,
      password: '123456',
      status: false
    },
  ])
};
