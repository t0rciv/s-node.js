/* 
 0 Obter usuário
 1 Obter o número de telefone de um usuário a partir do seu Id
 2 Obter o endereço de um usuário a partir do seu Id
*/

// módulo interno do node.js

const util = require("util");
const obterEnderecoAsync = util.promisify(obterEndereco);

function obterUsuario() {
  return new Promise(function resolvePromise(resolve, reject) {
    setTimeout(function () {
      // return reject(new Error('DEU RUIM DE VERDADE!'));

      return resolve({
        id: 1,
        nome: "Aladin",
        dataNascimento: new Date(),
      });
    }, 1000);
  });
}

function obterTelefone(idUsuario) {
  return new Promise(function resolvePromise(resolve, reject) {
    setTimeout(function () {
      return resolve({
        ddd: "(51)",
        telefone: "98999.0999",
      });
    }, 2000);
  });
}

function obterEndereco(idUsuario, callback) {
  return new Promise(function resolvePromise(resolve, reject) {
    setTimeout(function () {
      return callback(null, {
        rua: "Rua dos Bobos",
        numero: "0",
      });
    }, 2000);
  });
}

// adicionar async no nome da função -> automaticamente ela retornará uma promise
main();
async function main() {
  try {
    const usuario = await obterUsuario();
    /* const telefone = await obterTelefone(usuario.id);
    const endereco = await obterEnderecoAsync(usuario.id); */

    const resultado = await Promise.all([
      obterTelefone(usuario.id),
      obterEnderecoAsync(usuario.id),
    ]);

    const telefone = resultado[0];
    const endereco = resultado[1];

    console.log(`
      Nome: ${usuario.nome},
      Endereço: ${endereco.rua}, ${endereco.numero},
      Telefone: (${telefone.ddd}) ${telefone.telefone},
    `);
  } catch (error) {
    console.error("DEU RUIM", error);
  }
}

/* const usuarioPromise = obterUsuario();
usuarioPromise
  .then(function (usuario) {
    return obterTelefone(usuario.id).then(function resolverTelefone(result) {
      return {
        usuario: {
          nome: usuario.nome,
          id: usuario.id,
        },
        telefone: result,
      };
    });
  })
  .then(function (resultado) {
    const endereco = obterEnderecoAsync(resultado.usuario.id);
    return endereco.then(function resolverEndereco(result) {
      return {
        usuario: resultado.usuario,
        telefone: resultado.telefone,
        endereco: result,
      };
    });
  })
  .then(function (resultado) {
    console.log(`
      Nome: ${resultado.usuario.nome}
      Endereço: ${resultado.endereco.rua}, ${resultado.endereco.numero}
      Telefone: ${resultado.telefone.ddd} ${resultado.telefone.telefone}
    `);
  })
  .catch(function (error) {
    console.error("DEU RUIM", error);
  }); */

/* obterUsuario(function resolverUsuario(err, usuario) {
  if (err) {
    console.error("Deu ruim com o usuário!", err);
    return;
  }
  obterTelefone(usuario.id, function resolverTelefone(err1, telefone) {
    if (err1) {
      console.error("Deu ruim com o telefone!", err1);
      return;
    }
    obterEndereco(usuario.id, function resolverEndereco(err2, endereco) {
      if (err2) {
        console.error("Deu ruim com o endereço!", err2);
        return;
      }

      console.log(`
        Nome: ${usuario.nome},
        Endereço: ${endereco.rua}, ${endereco.numero},
        Telefone: (${telefone.ddd}) ${telefone.telefone},
      `);
    });
  });
}); */
