// console
console.log("Teste"); 
// console.error("TesteError"); 
// console.warn("Teste Aviso");

// variáveis: são formas de guardar algum valor na memoria para uso posterior no nosso software
var x = 10; 
let y =  15; 
const z = 20;

if (1) {
    let y = 55    
    console.log(y);
}; 
console.log(x); 
console.log(y);
console.log(z);

// tipos de dados
const nome = "felipe"; 
console.log(nome);
console.log( typeof nome); // o typeof exibe o tipo de dado

const linguagens = [ "JavaScript" , "PHP" , "Python" , "22" ]; 
console.log( linguagens )
console.log( typeof linguagens )


const user = { email: "luizfelipe@teste.com" , password: "teste12345" , idade: 30 } //object literals 
console.log( user )
console.log( typeof user )

// métodos de manipulação de string. 
const nomeTodo = "Luiz Felipe"; 
console.log(nomeTodo.length); // length dá uma quantidade de caracters numa string. 
 
const stringToArray = nomeTodo.split(' '); 
console.log(stringToArray); 

console.log(nomeTodo.toLowerCase()); // transforma o nome atribuido a minha variavel em letras minusculas.
console.log(nomeTodo.toUpperCase()); // transoforma em letras maiusculas.

console.log(nomeTodo.slice(0, 4)); 

// métodos de manipulação de array 
const lista = ['a', 'b', 'c', 'd', 'e', 'f']; 
console.log(lista.length); // quantidade de elementos na minha array. 

console.log(lista[2]);   

lista[5] = 'w'; // mudei o elemento a minha lista array.
console.log(lista); 

console.log(lista[lista.length - 1]) // pegando o ultimo elemento da lista array.

lista.push('g'); // atribui um novo elemento a minha lista array.
console.log(lista); 

lista.pop(); // remover um elemento final da minha lista array.
console.log(lista);