// Estruturas condicionais ( if e else )
const a = 10 
if (a > 8) { 
    console.log('A é maior que 8')
}

const b = "Felipe"

if(b === "João") {
    console.log("O nome é joão")
} else if(b === "Pedro") {
    console.log("O nome é Pedro")
} else{
    console.log("Não encontramos o nome do usuário!") 
}

 

const someNumber = 24
// if ternário é básicamente um if que pode ser feito numa linha só. 
let testingANumber = someNumber < 20 ? 'Yes' : 'No'
console.log(testingANumber)

// Estruturas de repetição - loop 
const minhaLista = [1, 2, 3, 4, 5]
let contador = 0

while(contador < minhaLista.length) { //length é para ver a quantidade de elementos na minha array. 
    console.log('Imprimindo: ' + minhaLista[contador])
    contador++ //counter = counter + 1
}

const minhaSegundaLista = ['a', 'b', 'c', 'd', 'e']
    for(let contador = 0; contador < minhaSegundaLista.length; contador++) { // length serve para ver o cumprimento da lista. 
        console.log(`Imprimindo: ${minhaSegundaLista[contador]}`) // recurso chamado de template literals 
    }

// métodos de array -> repetição
const nomes = ["Felipe", "Débora", "Eduarda", "Dom"]
nomes.forEach(function(name) { //function nada mais é do que algo que será executado a cada repetição
    console.log(`O nome é: ${name}`) // o forEach serve para passar cada item da lista. 
})

const modifiedNames = nomes.map(function(name){ // o map tem a carateristica de modificar o dado ou varios dadosem array. 
    if (name === "Felipe"){
        return (name = 'Sr. Felipe')
    } else {
        return name
    }
})
console.log(modifiedNames)

const bigNumbers = [1, 2, 3, 4, 5, 10, 100].filter(function (number) {
    return number >= 5
})
console.log(bigNumbers); 

const sumAll = [10, 20, 30, 40, 50].reduce(function(total, number){ // o papel do reduce é reduzir um array a um elemento só
    return total + number 
})
console.log(sumAll)

// funções 
function minhafuncao() {
    console.log('olá função')
}
minhafuncao()

// o que são argumentos, parâmetros de função. 
function nomeCompleto(nome, sobrenome) {
    return`O nome completo é: ${nome} ${sobrenome}`
}
//posso criar uma função e atribuir diferentes tipos de parâmetros 
console.log(nomeCompleto('Felipe', 'Capiberibe'))
console.log(nomeCompleto('Maria', 'Eduarda'))

const primeiroNome = 'Belinha'
const segundoNome = 'neném'
//  const meuNomeCompleto =  nomeCompleto('Belinha', 'neném')
    const meuNomeCompleto =  nomeCompleto(primeiroNome, segundoNome)
console.log(meuNomeCompleto)

// arrow functions 
const myArrowFunction = (a, b) => {
    return a + b
}
console.log(myArrowFunction(2, 5))

const mySimpleArrowFunction = (a, b) => a + b
console.log(mySimpleArrowFunction(5, 5))

// Classes 
class Product { 
    constructor(name, price) {
        this.name = name
        this.price = price 
    }
    productDetails() {
        return `O nome do produto é ${this.name} e o preço é R$${this.price}`
    }
 
}
const socks = new Product ('Meia da Adidas', 10.99)
console.log(socks.name)
console.log(socks.price)
const shirt = new Product ('Camisa da Nike', 49.99)
console.log(shirt.name)
console.log(shirt.price)

console.log(shirt.productDetails())

// herança, que é onde a gente estende uma  classe
class SuperProduct extends Product {
    constructor(name, price, size) {
        super(name, price)
        this.size = size
    }
    showAdjective(Adjective) {
        return `O ${this.name} produto é muito ${Adjective}`
    }
// static, métodos estaticos que tambem fazem parte da orientação ao objeto, onde eu tenho um método que eu posso executar sem a criação de uma nova instancia.    
    static sayHello() {
        console.log('Hello')
    }
}
const tenis = new SuperProduct('Tenis Puma', 399.99, '42')
console.log(tenis.name)
console.log(tenis.price)
console.log(tenis.size)

console.log(tenis.showAdjective('Bem feito e de otima qualidade!'))

 

SuperProduct.sayHello()

// DOM - Document Object Model
// Seleção de elementos 
const title = document.getElementById("title")
console.log(title)

// query Selector 
const sameTitle = document.querySelector("#title")
console.log(sameTitle)

const texts = document.querySelectorAll('.text')
console.log(texts)
console.log(texts[1])

texts.forEach((text) => {
    console.log(text.textContent) // com o text content eu imprimo cada um dos textos dos meus parâgrafos
})

// Manipulação de elementos 
title.textContent = "Mudei o texto"

texts[0].innerHTML = '<span>Alteramos o HTML deste elemento</span>'

texts[1].style.backgroundColor = 'red';

texts[2].classList.add('my-class')

texts[2].classList.remove('text')

texts[3].remove()

// Eventos. Dando vida para um botão
const btn = document.querySelector("#btn")

btn.addEventListener("click", function(){
    texts[2].style.color = "blue"
})