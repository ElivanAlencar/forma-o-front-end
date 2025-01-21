//  adicionando eventos

const btN = document.querySelector("#btn");

btN.addEventListener("click", function () {
  console.log("clicou aqui!");
});

// removendo evento
const segBtn = document.querySelector("#btn1");

function imprimirMensagem() {
  console.log("teste");
}

segBtn.addEventListener("click", imprimirMensagem);

const thisBtn = document.querySelector("#btn2");

thisBtn.addEventListener("click", () => {
  console.log("evento removido");
  segBtn.removeEventListener("click", imprimirMensagem);
});

// argumento do evento
const myTitle = document.querySelector("#mytitle");

myTitle.addEventListener("click", (event) => {
  console.log(event);
});

// propagação

const containerBtn = document.querySelector("#btn-container");
const btnInsideContainer = document.querySelector("#div-btn");

containerBtn.addEventListener("click", () => {
    console.log("evento 1");
});

btnInsideContainer.addEventListener("click", (e) => {
    e.stopPropagation();
    console.log("evento 2");
});

// removendo evento padrão

const a = document.querySelector("a");

a.addEventListener("click", (e) => {
    e.preventDefault();

    console.log("não alterou apágina");
})
