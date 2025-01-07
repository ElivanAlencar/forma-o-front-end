// arrays e bjetos

// arrays

const lista = [0, 1, 2, 3, 4,];

console.log(lista);


// acessando elementos do array. arrays dentro de arrays

const itens = [0, 1, 2, 3, 4,[]];
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

const users = ["elivan", "pedro", "josé", "lucas", "janos"]

for (let i = 0; i < users.length; i++) {
    console.log(`listando o usuário: ${users[i]}`);
}


//  push e pop / adicinar e remover do final da lista;

const array = ["a", "b", "c"]

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

