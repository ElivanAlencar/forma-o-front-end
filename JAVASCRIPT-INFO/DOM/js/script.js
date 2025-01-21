// // movendo-se pelo DOM
// console.log(document.body);

// // recebe uma lista - array com todos os elementos.
// // [] indice 1.
// console.log(document.body.childNodes[1]);

// console.log(document.body.childNodes[1].childNodes);

// console.log(document.body.childNodes[1].childNodes[1].textContent);


// // selecionando por tag

// const ListItens = document.getElementsByTagName("li");

// console.log(ListItens);

// // selecionando por id

// const titile = document.getElementById("title");

// console.log(title);

// // selecionando por classe

const produtos = document.getElementsByClassName("produtos");

console.log(produtos);


// selecionando com css

const produtosquery = document.querySelectorAll(".produtos");

console.log(produtosquery);

const maincontainer = document.querySelector("#main-container");

console.log(maincontainer);



/* alterando o HTML 
podemos mudar praticament toda a página com DOM
adicionar, remover e esté clonar elementos;
alguns métodos muito utilizados são: insertBefore, appendCild, replaceChild; */

// insertBefore inserir um elementos antes do outro
// appendChild vai inserir elemento dentro do outro
// replaceChild vai troca um elemento pelo outro

// insertBefore

const p = document.createElement("p");

console.log("p");

// selecinando elemento pai

const header = title.parentElement

console.log(header);

// criando tag no HTML

header.insertBefore(p, title);


// appendChild

const navLinks = document.querySelector("nav ul");

const li = document.createElement("li");

navLinks.appendChild(li);


// replaceChild

const h2 = document.createElement("h2");

// trocando o title
h2.textContent = "meu novo title"

header.replaceChild(h2, title);


// createTextNode

const myText = document.createTextNode("agora vamos colocar mais um title");

console.log(myText);

const h3 = document.createElement("h3");

h3.appendChild(myText);

console.log(h3);

maincontainer.appendChild(h3);


// trabalhando com atributos
const fristLink = navLinks.querySelector("a");

console.log(fristLink);

console.log("href", "https://www.google.com");

fristLink.setAttribute("target", "blank");


// altura e largura

const footer = document.querySelector("footer");

console.log(footer.offsetWidth);
console.log(footer.offsetHeight);

console.log(footer.clientWidth);
console.log(footer.clientHeight);


// posição do elemnto

const produtos1 = produtos[0];

console.log(produtos1.getBoundingClientReact());