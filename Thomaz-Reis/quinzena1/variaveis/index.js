//1.
let a = 10
let b = 10

console.log(b) // imprime 10

b = 5 // novo valor para b
console.log(a, b) // imprime 10 5



//2.
let a = 10
let b = 20
let c
c = a // imprime 10
b = c // mprime 10 
a = b // imprime 10 

console.log(a, b, c) // imprime 10 10 10



//3.

let p = prompt("Quantas horas você trabalha por dia?") // variável horasDia
let t = prompt("Quanto você recebe por dia?") // variável reaisDia
alert(`Voce recebe ${t/p} por hora`) // alert(`Voce recebe ${horasDia/reaisDia} por hora`)


//Exercícios de escrita de código

//a)
let nome
//b)
let idade
//c)
console.log(typeof nome)
console.log(typeof idade)

//d) Foi impresso uma variável do tipo undefined pois não foi definido o tipo de variável

//e)

const nome = prompt("Qual seu primeiro nome?")

const idade = Number(prompt("Qual sua idade?"))
console.log(typeof nome)
console.log(typeof idade)

 
//f) Mudaram os tipos de variável de acordo com as respostas. String para o nome e number para a idade.

//g)
console.log("Olá", nome, "você tem", idade,"anos.")



//2. Perguntas: "Você está usando blusa de frio?";"Você está usando sapatos?";"Você usa óculos?"
//a)
const usaRoupa = "Sim."
const ñusaSapato = "Não."
var useGlasses = "Sim."
//b)
console.log("Você está usando blusa de frio?",usaRoupa,"Você está usando sapatos?",ñusaSapato,"Você usa óculos?",useGlasses)



//3.
let b = 25
let a = 10
let c = a

console.log("O novo valor de a é", b) 
console.log("O novo valor de b é", c)


//DESAFIO

const numberA = prompt("Digite um número")
const numberB = prompt ("Digite outro número")

console.log ("A soma de",numberA,"+",numberB,"=",Number(numberA)+Number(numberB))
console.log ("A multiplicação de",numberA,"X",numberB,"=",Number(numberA)*Number(numberB))
