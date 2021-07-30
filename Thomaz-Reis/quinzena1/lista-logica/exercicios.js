
// Exercício 0A
function soma() {
  // escreva seu código aqui
  const num1 = Number(prompt("Digite o primeiro número"))
  const num2 = Number(prompt("Digite o segundo número"))

  console.log(num1 + num2)
}

// Exercício 0B
function imprimeMensagem() {
  // escreva seu código aqui
  const mensagem = prompt("Digite sua mensagem")

  console.log(mensagem)
}

// ---------------------------------------------------
// Exercícios

// Exercício 1
function calculaAreaRetangulo() {
  const ladoA = Number(prompt("Digite a medida do lado A em metros"))
  const ladoB = Number(prompt("Digite a medida do lado B em metros"))
  
  console.log(ladoA*ladoB)
}  
// Exercício 2
function imprimeIdade() {
  const anoAtual = Number(prompt("Digite o ano atual"))
  const anoNascimento = Number(prompt("Digite o ano em que nasceu"))

  console.log(anoAtual-anoNascimento)
}

// Exercício 3
function calculaIMC() {
  const peso = Number(prompt("Digite o seu peso em kg"))
  const altura = Number(prompt("Digite a sua altura em metros"))

  console.log(peso/(altura*altura))
}

// Exercício 4
function imprimeInformacoesUsuario() {
  let nome1 = "Meu nome é "
  const nome = prompt("Digite o seu nome")
  let idade1 = ", tenho "
  const idade = Number(prompt("Digite a sua idade"))
  let email1 = " anos, e o meu email é "
  const email = prompt("Digite o seu email")
  let email2 = "."

  console.log(nome1+nome+idade1+idade+email1+email+email2)
}


// Exercício 5
function imprimeTresCoresFavoritas() {
  const cor1 = prompt("Digite a primeira cor favorita")
  const cor2 = prompt("Digite a segunda cor favorita")
  const cor3 = prompt("Digite a terceira cor favorita")

  console.log(Array.of(cor1,cor2,cor3))
}

// Exercício 6
function retornaStringEmMaiuscula() {
 var mensagem = prompt("Digite uma mensagem")

 console.log(mensagem.toUpperCase())
}

// Exercício 7
function calculaIngressosEspetaculo() {
  var price = Number(prompt("Digite o custo de um espetáculo de teatro"))
  var unit = Number(prompt("Digite o valor de cada ingresso"))

  console.log(price/unit)
}

// Exercício 8
function checaStringsMesmoTamanho() {
  var campo1 = prompt("Digite uma palavra")
  var campo2 = prompt("Digite outra palavra")
  
  console.log(campo1.length===campo2.length)
}

// Exercício 9
function checaIgualdadeDesconsiderandoCase() {
  var campo1 = prompt("Digite uma palavra")
  var campo2 = prompt("Digite outra palavra")

  console.log(campo1.toUpperCase()===campo2.toUpperCase())
}

// Exercício 10
function checaRenovacaoRG() {

  const anoAtual = Number(prompt("Digite o ano atual"))
  const anoNascimento = Number(prompt("Digite o ano em que nasceu"))
  const anoEmiss = Number(prompt("Digite o ano em que seu RG foi emitido"))

  var idade = (anoAtual-anoNascimento)
  var renova = (anoAtual-anoEmiss)

  let condicao1 = idade <= 20 && renova >= 5
  let condicao2 = (idade > 20 && idade <=50) && renova >= 10
  let condicao3 = idade > 50 && renova >= 15

  console.log(condicao1 || condicao2 || condicao3)
}
  
// Exercício 11
function checaAnoBissexto() {
const ano = Number(prompt("Digite um ano para descobrir se é bissexto"))

console.log((ano % 4 == 0) && ((ano % 100 != 0) || (ano % 400 == 0))) 

}

// Exercício 12
function checaValidadeInscricaoLabenu() {
  const idade = prompt("tem mais de 18?")
  const ensino = prompt("tem ensino médio completo?")
  const tempo = prompt("tem disponibilidade de horários?")

  console.log((idade == "sim") && (ensino == "sim") && (tempo == "sim"))
}
