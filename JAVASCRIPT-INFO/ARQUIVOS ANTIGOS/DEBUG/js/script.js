// bug e debug

// declarar strict

// "use strict";

// tratamento de dados

function checkNumber(n) {
  const result = Number(n);

  if (Number.isNaN(result)) {
    console.log("valor incorreto!");
    return;
  }

  console.log("Valor correto!");
  return result;
}

checkNumber(5);
checkNumber("10");
checkNumber({});
checkNumber("teste");


// exceptions 

let x = 10;

if (x != 11) {
    throw new Error("o valor de x não pode ser difernte de 11!");
};

// try catch

try {
    const soma = x + y;
} catch(error) {
    console.log(`erro no pragrama ${error}`);
}

