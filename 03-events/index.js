const EventEmitter = require("events");
class MeuEmissor extends EventEmitter {}

const meuEmissor = new MeuEmissor();
const nomeEvento = "usuario:click";
meuEmissor.on(nomeEvento, function (click) {
  console.log("Um usuário clicou", click);
});

/* meuEmissor.emit(nomeEvento, "no ok");

let count = 0;
setInterval(function () {
  meuEmissor.emit(nomeEvento, "no OK - " + count++);
}, 2000); */

const stdin = process.openStdin();
stdin.addListener("data", (value) => {
  console.log(`Você digitou: ${value.toString().trim()}`);
});

/* const main = () => {
  return new Promise((resolve, reject) => {
    stdin.addListener("data", (value) => {
      // console.log(`Você digitou: ${value.toString().trim()}`);
      return resolve(value);
    });
  });
};
main().then((resultado) => {
  console.log("Resultado:", resultado.toString());
}); */
