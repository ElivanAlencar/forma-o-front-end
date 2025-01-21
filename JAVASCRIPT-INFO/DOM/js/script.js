// movendo-se pelo DOM
console.log(document.body);

// recebe uma lista - array com todos os elementos.
// [] indice 1.
console.log(document.body.childNodes[1]);

console.log(document.body.childNodes[1].childNodes);

console.log(document.body.childNodes[1].childNodes[1].textContent);


// selecionando por tag

const ListItens = document.getElementsByTagName("li");

console.log(ListItens);

// selecionando por id

const titile = document.getElementById("title");

console.log(title);

// selecionando por classe

const produtos = document.getElementsByClassName("produtos");

console.log(produtos);

