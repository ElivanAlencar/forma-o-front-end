// arrays e bjetos

// arrays

const lista = [0, 1, 2, 3, 4];

console.log(lista);

// acessando elementos do array. arrays dentro de arrays

const itens = [0, 1, 2, 3, 4, []];
console.log(itens);

// propriedades.

// length mostra quantos elementos tem no array

const numbers = [4, 5, 7];

console.log(numbers.length);

// mostra quantos caracteres tem em uma string

const myName = "Elivan";

console.log(myName.length);

// acessando elementos do array

const arr = ["a", "b", "c", "d", "e"];

console.log(arr[3]);

console.log([4]);

// métodos

const otherNumbers = [1, 2, 3];

const allNumber = numbers.concat(otherNumbers);

console.log(allNumber);

// objetos

const person = {
  name: "elivan",
  age: 36,
  job: "programador",
};

console.log(person);

console.log(person.age);

console.log(person.name.length);

// criando e deletando propriedades

const car = {
  engine: 2.0,
  brand: "vw",
  model: "tiguan",
  km: 20000,
};

console.log(car);

// adicionar mais um item no car

car.doors = 4;
console.log(car);

// deletar um item do car

delete car.km;
console.log(car);

//  objeto copiando objetos

const obj = {
  a: "teste",
  b: "carro",
};

const obj2 = {
  c: [],
};

Object.assign(obj2, obj);

console.log(obj2);

// conhecendo melhor os objetos

console.log(Object.keys(obj));
console.log(Object.keys(obj2));
console.log(Object.keys(car));

//  loop em array

const users = ["elivan", "pedro", "josé", "lucas", "janos"];

for (let i = 0; i < users.length; i++) {
  console.log(`listando o usuário: ${users[i]}`);
}

//  push e pop / adicinar e remover do final da lista;

const array = ["a", "b", "c"];

array.push("f");
console.log(array);

array.pop();
console.log(array);

// shitf e unshift / adicinar e remover no inicio da lista

const letters = ["a", "b", "c"];

const letter = letters.shift();

console.log(letters);
console.log(letter);

letters.unshift("k", "g", "f");

letters.unshift("h");
console.log(letters);

// indexOf e lastIndexOf

const myElements = ["morango", "maçã", "abacate", "pêra", "abacate"];

console.log(myElements.indexOf("abacate"));

console.log(myElements[2]);
console.log(myElements[myElements.indexOf("abacate")]);

console.log(myElements.lastIndexOf("abacate"));

// slice

const testeSlice = ["a", "b", "c", "d", "e", "f"];

const subArray = testeSlice.slice(2, 4);

console.log(subArray);
console.log(testeSlice);

const subArray2 = testeSlice.slice(2, 4 + 1);

console.log(subArray2);

// retorna uma lista vazia

const subArray3 = testeSlice.slice(10, 20);

console.log(subArray3);

// foreach

const nums = [1, 2, 3, 4, 5];

nums.forEach((numero) => {
  console.log(`o número é ${numero}`);
});

const posts = [
  { title: "primeiro post", category: "PHP" },
  { title: "segundo post", category: "javascript" },
  { title: "terceiro", category: "python" },
];

posts.forEach((post) => {
  console.log(`exibindo post: ${post.title}, da categoria: ${post.category}`);
});

// includes

const brands = ["BMW", "VW", "Fiat"];

// mostra boleooan verdade ou falso
console.log(brands.includes("Fiat"));
console.log(brands.includes("KIA"));

if (brands.includes("BMW")) {
  console.log("Há uma carro da marca BMW");
}

// reverse | reverte a ordem do array

const reverseTest = [1, 2, 3, 4, 5];
reverseTest.reverse();

console.log(reverseTest);

// trim

const trimTest = "  testando  \n ";

console.log(trimTest);

console.log(trimTest.trim());

console.log(trimTest.length);

console.log(trimTest.trim().length);

// padstart

const testePadStart = "1";

const newNumber = testePadStart.padStart(4, "0");

console.log(testePadStart);

console.log(newNumber);

const testePadEnd = newNumber.padEnd(10, "0");

console.log(testePadEnd);

// split

const frase = "o rato roeu a roupa do rei de roma";

const arrayFrase = frase.split(" ");
console.log(arrayFrase);

// join

const fraseDenovo = arrayFrase.join(" ");

console.log(fraseDenovo);

const itemParaComprar = ["mouse", "teclado", "monitor"];

const fraseDeCompra = `precisa comprar: ${itemParaComprar.join(", ")}.`;

console.log(fraseDeCompra);

// repeat

const palavra = "testando ";

console.log(palavra.repeat(5));

// rest operator


const somaInfinita = (...args) => {
  let total = 0;

  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }

  return total;
};

console.log(somaInfinita(1, 2, 3));

console.log(somaInfinita(10, 10, 10, 20));


// for of

const somaInfinite2 = (...args) => {
  let total = 0;

  for (num of args) {
    total += num;
  }

  return total;
};

console.log(somaInfinite2(1, 2, 2,));

console.log(somaInfinite2(5, 10, 8, 9, 23));

// destructuring em objetos

const userDetails = {
  firstName: "Elivan",
  lastName: "Alencar,",
  job: "aprendiz de programador",
};

const { firstName, lastName, job} = userDetails;

console.log(firstName, lastName, job);


// renomear variavel

const { firstName: primeiroNome } = userDetails;

console.log(firstName);

// destructuring em arrays
const myList = ["avião", "submarino", "carro"];

const [veiculoA, veiculoB, veiculoC] = myList;

console.log(veiculoA, veiculoB, veiculoC);

//  json - javaScript Object Notation 

const myJson = '{"name": "elivan", "age": 31, "skills": ["PHP", "javaScript", "python"]}';

console.log(myJson);


/* json para objeto e objetos Json
na maioria das vezes vamos precisar converter objetos para json;
ou json para um objeto javaScript válido;
utilizando o objeto json e os métodos Stringify e parse; */

// json para objeto e objetos Json

const myObject = JSON.parse(myJson);

console.log(myObject);



const myNewJson =  JSON.stringify(myObject);

console.log(myNewJson);

console.log(typeof myNewJson);
