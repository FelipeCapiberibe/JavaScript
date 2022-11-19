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

lista.pop(); // remove um elemento do final da minha lista array.
console.log(lista);

lista.shift(); // remove o primeiro elemento da lista array. 
console.log(lista);

lista.unshift('3'); // adicionar um elemento ao inicio da minha lista array.  
console.log(lista);

// destructuring do meu array 
const [n1, n2] = lista 
console.log(n1); 
console.log(n2); 

// Objetos 
const produtos = { 
    nome: 'Camisa',
    valor: '15.99', 
    estoque: true, 
    tamanhos: ['P', 'M', 'G'],
}
console.log(produtos.nome); 
console.log(produtos['nome']); // mesma coisa de cima 
console.log(produtos.estoque);
console.log(produtos); 

// destructuring , consigo extrair variaveis por meio de objetos 
const { valor, estoque} = produtos

console.log(valor); 
console.log(estoque); 

// JSON - JavaScript Object Notation, json é utilizada para comunicação entre api's
const dog = {
    nome: 'Brutus', 
    idade: 10 
}
const json = JSON.stringify(dog); // quando eu uso o stringfy o js converte o meu objeto para um json valido.  
console.log(json)

const obj = JSON.parse(json); // o método PARSE vai converter um objeto json em objeto js. 
console.log(obj) 

const jsonErrado = '{"nome": "Teste", "sobrenome": "Testando"}'
const obj2 = JSON.parse(json)
console.log(obj2); 