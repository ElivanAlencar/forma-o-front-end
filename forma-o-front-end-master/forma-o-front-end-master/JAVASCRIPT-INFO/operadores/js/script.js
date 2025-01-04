// number

console.log(typeof 2);
console.log(typeof 5.14);
console.log(typeof -28);


// operações aritméticas

console.log(2 + 7);
console.log(7 - 2);

// operadores de divição

console.log( 10 / 2);
console.log(20 / 3);

// operadores de multiplicação

console.log(5 * 10);
console.log(10 * 15);


// dois operadores juntos

console.log( 5 + (4 * 2));


// especial number

/* special number são dados considerados como números, mas não funionam entre  eles. os valoes são: infinity, -infinity, nan (not a number). algumas operações podem resultar nestes valores; vamos ver na prática*/

console.log(typeof Infinity);
console.log(typeof -Infinity);

console.log(typeof NaN);

// strings texto

console.log(typeof "um texto");
console.log(typeof 'mais um texto');

/* concatenação recurso de que une dois ou mais textos ou números. concatenação é usando o sinal de + */

console.log("oi" + " tudo bem" + "?");
console.log(25+30 +  25+2 + (25*5));


/* interpolação é um recurso semelhante a concatenação, tambem pode ser chamado de (templete Strings) */

console.log(`A soma de 2 + 2 é: ${2 + 2}`); 

console.log(`A soma total de todos os números é: ${200 + 300}`);

console.log(`podemos executa qualquer coisa aqui ${console.log("teste")}`);


// boolean 

console.log( 5 > 30);
console.log( 30 > 29);
console.log(typeof true);
console.log(typeof false);


/* as comparaçõs que podemos utilizar são: 
maior e menor: >e<
maior ou igual e menor ou igual: <= e <=
igual == 
diferente !=
 */

console.log( `10 mais 10 é igual: ${10 == 10}`);
console.log(`10 mais 9 é igual: ${10 == 9}`);
console.log(`10 e 9 são diferentes: ${10 != 9}`);
console.log(`5 é menor que 10: ${5 < 10}`);
console.log(`5 é maior que 10: ${5 > 10}`);


// diferente !== e identico ===

console.log(`10 é diferete de "10" ${10 !== "10"}`);
console.log(`10 é identico "10" ${10 === "10"}`);


/* os operadores lógicos servem para unir duas ou mais comparações

o resultado final  tambem é um boolean

&& AND true se os dois lados forem  verdadeiros se não será falso

|| OR para ser true basta um dos lados ser verdadeiro

! NOT inverte o valor booleano
*/


console.log(`10 é maior que 5 e menor que 20: ${10 > 5 && 10 < 20}`);

console.log(`10 é maior que 5  e menor que 100 ${10 > 5 && 10 < 100} `);

console.log(`20 é maior que 10 e menor que 30 ${ 20 > 10 || 30 < 20}`);


// && AND true se os dois lados forem  verdadeiros se não será falso

console.log(true && false);
console.log(true && true);

// || OR para ser true basta um dos lados ser verdadeiro

console.log(false || false);
console.log(true || false);
console.log(5 > 2 || "mathues" === 1);


// ! NOT inverte o valor booleano

console.log(!true);



