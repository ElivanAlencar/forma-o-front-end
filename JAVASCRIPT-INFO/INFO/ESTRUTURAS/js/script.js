// // variáveis

// let nome = "joão";

// console.log(nome);

// nome = "joão lima";

// console.log(nome);

// const idade = 36;

// console.log(idade);



// // variáveis sensitive case

// const nomecompleto = "elivan";

// const nomeCompleto = "alencar";
// const nomeCompleTo = "silva";

// console.log(nomecompleto, nomeCompleto, nomeCompleTo);


// let _teste = "ok";
// let $teste = "ok";

// console.log(_teste, $teste);


// // função prompt

// const age = prompt("digite a sua idade");
// console.log(`sua idade é ${age}`);

// // função alert

// const z = 10;

// alert(`esse número é ${z}`);

// // meth

// console.log(Math.max(10, 15, 25, 40));

// // floor vai arredondar o número para baixo

// console.log(Math.floor(1.99));

// // ceil vai arredondar o número para cima

// console.log(Math.ceil(1.2));

// // funções objeto console

// console.error("erro!");
// console.warn("aviso");

// if 

const M = 10

if (M > 5) {
    console.log("M é maior que 5! ");
}


const user = "joão";

if (user === "joão") {
    console.log("joão");
}

// else


const loggedIn = false;

if (loggedIn) {
    console.log("está autenticado!")
} else {
    console.log("não está autenticado");
}

const q = 10;
const w = 20;

if (q > 5, w > 20) {
    console.log("número maior que 5 e 20");
} else {
    console.log("número menor que 5 e 20");
}


//  else if

if (1 > 2) {
    console.log("teste");

} else if (2 > 3) {
    console.log("teste2");

} else if (10 > 9) {
    console.log("agotra sim!");
}

const userName = "elivan";
const userAge = 36;

if (userName === "joão") {
    console.log("bem vindo joão")
} else if (userName === "elivan" && userAge === 36) {
    console.log("ola elivan você tem 36 anos");
} else {
    console.log("nenhuma condição aceita!");
}


// estrutura de repetição

// while 


let p = 0;

while (p < 11) {
    console.log(`repetindo ${p}`);
    p = p + 1;
}


// do while

let o = 10;

do {
    console.log(`valor de o: ${o}`);
    o--;
} while (o > 0);

//  for

for (let t = 0; t < 10; t++) {
    console.log("repetindo algo...");
};

// break

for (let g = 20; g > 10; g--) {
    console.log(`o valor de g é: ${g}`);

    if (g === 15) {
        console.log("o g é 15!");
        break;
    }
}

// continue

for (let s = 0; s < 10; s = s + 1) {
    // operador resto = %
    if (s % 2 === 0) {
        console.log("número par!");
        continue;
    };

    console.log(s);
}

// switch

const job = "advogado";

switch (job) {
    case "programador":
        console.log("você é um programador");
        break;

    case "analsita":
        console.log("você é um analista");
        break;

    case "advogado":
        console.log("advogado");
        break;
    default:
        console.log("nenhuma opção aceita!");
}