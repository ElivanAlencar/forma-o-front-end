// settimeout
// console.log("ainda não executou ");

// setTimeout(function () {
//   console.log("requisição assincrona");
// }, 5000);

// console.log("ainda não executou 2");

// setInterval

// console.log("ainda não começou");

// setInterval(function () {
//   console.log("Intervalo asincrono");
// }, 3000);

// console.log("ainda não começou  2");

// promise

// const promesse = Promise.resolve(5 + 5);

// promesse
//   .then((value) => {
//     console.log(`A soma é ${value}`);
//     return value;
//   })
//   .then((value) => value - 1)
//   .then((value) => console.log(`agora é ${value}`));

// console.log("outro código");

// // falhas na promise

// Promise.resolve(4, "asd").then((n) => {
//   if ((Number, isNaN(n))) {
//     throw new Error("valores invalidos");
//   }
// })

// .catch((err) => console.log(`um erro ocorreu: ${err}`));


// // rejeição
// function checkNumber (n) {
//   return new Promise((resolve, reject) => {
//     if (n > 10) {
//       resolve(`o nímero é amior que 10`);
//     } else {
//       reject(new Error("número muito baixo"))
//     }
//   });
// }

// const a = checkNumber(20);

// const b = checkNumber(10);

// a.then((v) => console.log(`result é ${v}`)).catch((err) =>
//   console.log(`um erro ocorreu:${err}`)
// );

// b.then((v) => console.log(`result é ${v}`)).catch((err) =>
//   console.log(`um erro ocorreu: ${err}`)
// );



//  gererators 
/* gererators funcionam de forma semelhante as promise
ações podem ser pausadase continuadas depois
temos novos operadores, como FUNCTION* E YIELD */

function* generator() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = generator();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);