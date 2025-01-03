// funções

// craindo um função 

function minhaFuncao() {
    console.log("testando");
};

minhaFuncao();
minhaFuncao();

const minhaFuncaoEmVariavel = function () {
    console.log("função em variavel");
};

minhaFuncaoEmVariavel();

// função com parametro ou argumento

function funcaoComParametro(txt) {
    console.log(`Imprimendo: ${txt}`);
};

funcaoComParametro(" Imprimindo alguma coisa");

// função com retorno

const a = 10;
const b = 20;
const c = 30;
const d = 40;

function soma(n1, n2) {
    return n1 + n2;
}

const resultado = soma(d, c);
console.log(resultado);

console.log(soma(d, c));


// escopo da função

let y = 10;

function testandoEscopo() {
    let y = 20;
    console.log(`y dentro da função: ${y}`);
}

testandoEscopo();

console.log(`y fora da função: ${y}`);


// escopo aninhado

let m = 10;

function escopoAninhado() {
    let m = 20;

    if (true) {
        let m = 30;

        if (true) {
            let m = 40;

            console.log(m);
        }

        console.log(m);
    }

    console.log(m);
}

escopoAninhado();

console.log(m);


// arrow function

const testeArrow = () => {
    console.log("esta é uma arrow function");
};

testeArrow();

const parOuImpor = (n) => {
    if (n % 2 === 0) {
        console.log("par");
        return;
    }
    console.log("Impar");
};

parOuImpor(5);

parOuImpor(10);


const raizQuadrada = (x) => {
    return x * x;
};

console.log(raizQuadrada(4))

const raizQuadrada2 = (x) => x * x;

console.log(raizQuadrada(5));

console.log(raizQuadrada(12));


