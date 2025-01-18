/* paradigma de programação orientação a objetos */

// método

const animal = {
  nome: "Bob",
  latir: function () {
    console.log("Au Au");
  },
};

console.log(animal.nome);

animal.latir();

// método aprofundando

const pessoa = {
  nome: "Elivan",

  getNome: function () {
    return this.nome;
  },

  setNome: function (novoNome) {
    this.nome = novoNome;
  },
};

console.log(pessoa.nome);

console.log(pessoa.getNome());

pessoa.setNome("Joaquim");

console.log(pessoa.getNome());

// prototype

const text = "oi";
console.log(Object.getPrototypeOf(text));

//  classes básicas

// objeto
const cachorro = {
  raca: null,
  idade: "4 anos",
  peso: "12kg",
  comida: "comida especial",
};

const pastorAlemao = Object.create(cachorro);
pastorAlemao.raca = "pastor Alemao";

console.log(pastorAlemao);
console.log(pastorAlemao.idade);
console.log(pastorAlemao.peso);
console.log(pastorAlemao.comida);

const bulldog = Object.create(cachorro);
bulldog.raca = "bulldog";

console.log(bulldog);

// classes baseadas em funções construtoras
function createCachorro(nome, raca) {
  const cachorro = Object.create({});

  cachorro.nome = nome;
  cachorro.raca = raca;

  return cachorro;
}

const bob = createCachorro("bob", "vira-lata");
console.log(bob);

const jack = createCachorro("jack", "labrador");
console.log(jack);

// funções como classe

function Cachorro(nome, raca) {
  this.nome = nome;
  this.raca = raca;
}

const husky = new Cachorro("ozzy", "husky");
console.log(husky);

// metodos na função construtora
Cachorro.prototype.uivar = function () {
  console.log("auuuuu!");
};

console.log(Cachorro.prototype);
husky.uivar();

// classes es6
class CachorroClasse {
  constructor(nome, raca) {
    this.nome = nome;
    this.raca = raca;
  }
}

const jeff = new CachorroClasse("jeff", "risk");
console.log(jeff);

class caminhao {
  constructor(eixos, cor) {
    this.eixos = eixos;
    this.cor = cor;
  }
  descreverCaminhao() {
    console.log(
      `este caminhao tem  ${this.eixos} eixos e é tem cor ${this.cor}`
    );
  }
}

const scania = new caminhao(6, "vermelho");

console.log(scania);

scania.descreverCaminhao();

const c2 = new caminhao(4, "preto");
console.log(c2);

//  override

class humano {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
}

const elivan = new humano("elivan", 36);
console.log(elivan);

//  symbol

class aviao {
  constructor(marca, turbina) {
    this.marca = marca;
    this.turbina = turbina;
  }
}

const asas = Symbol();
aviao.prototype[asas] = 2;

const boing = new aviao("boing", 4);
console.log(boing);

// getter e setter

class post {
  constructor(titulo, descrição, tags) {
    this.titulo = titulo;
    this.descrição = descrição;
    this.tags = tags;
  }

  get exibirTitulo() {
    return `voce esta lendo: ${this.titulo}`;
  }

  set adicionarTags(tags) {
    const tagsArray = tags.split(", ");
    this.tags = tagsArray;
  }
}

const myPost = new post("algum post", "É um post sobre programação");
console.log(myPost);

console.log(myPost.exibirTitulo);

myPost.adicionarTags = "programção, javascritp, js";
console.log(myPost);


// herança

class mamifero {
  constructor(patas) {
    this.patas = patas;
  }
}

class lobo extends mamifero {
  constructor(patas, nome) {
    super(patas, patas);
    this.nome = nome;
  }
}

const shark = new lobo(4, "shark");
console.log(shark);

console.log(shark.patas);

// instanceof

console.log(shark instanceof mamifero);

console.log(new lobo(4, "teste") instanceof mamifero);
console.log(new post("a", "b") instanceof lobo);