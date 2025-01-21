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
});

// eventos de tecla

document.addEventListener("keyup", (e) => {
    console.log(`soltou a telca ${e.key}`);
});


document.addEventListener("keydown", (e) => {
    console.log(`apertou a telca ${e.key}`);
})

// eventos de mouse

const mouseEvents = document.querySelector("#mouse");

mouseEvents.addEventListener("mousedown", () => {
  console.log("pressionou o botão");
});

mouseEvents.addEventListener("mouseup", () => {
  console.log("soltou o botao");
});

mouseEvents.addEventListener("dblclick", () => {
  console.log("click duplo");
});

// movimento do mouse

document.addEventListener("mousemove", (e) => {
  // console.log(`no eixo x: ${e.x}`)
  // console.log(`no eixo y: ${e.y}`)
});


// evento de scroll

window.addEventListener("scroll", (e) => {
  if (window.pageYOffset > 200) {
    console.log("passamos de 200px")
  }
});

const input = document.querySelector("#my-input")
  input.addEventListener("focus", (e) => {
    console.log("entrou no input");
  })




