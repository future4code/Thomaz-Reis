 
/* Exercícios de interpretação de código
Tente responder os exercícios dessa seção sem executar o código. Se ficar muito difícil, pode rodar no seu computador **para analisar e pensar sobre o resultado.** 

1. Leia o código abaixo:

    ```jsx
    const respostaDoUsuario = prompt("Digite o número que você quer testar")
    const numero = Number(respostaDoUsuario)

    if (numero % 2 === 0) {
      console.log("Passou no teste.")
    } else {
      console.log("Não passou no teste.")
    }
    ```

    a) Explique o que o código faz. Qual o teste que ele realiza? 
R.: O código recebe via prompt um número e verifica se ele é divisível por 2 com resto zero.
    b) Para que tipos de números ele imprime no console "Passou no teste"? 
R.: Números pares.
    c) Para que tipos de números a mensagem é "Não passou no teste"?
R.: Números ímpares.

2. O código abaixo foi feito por uma pessoa desenvolvedora, contratada para automatizar algumas tarefas de um supermercado:

    ```jsx
    let fruta = prompt("Escolha uma fruta")
    let preco
    switch (fruta) {
      case "Laranja":
        preco = 3.5
        break;
      case "Maçã":
        preco = 2.25
        break;
      case "Uva":
        preco = 0.30
        break;
      case "Pêra":
        preco = 5.5
        break; // BREAK PARA O ITEM c.
      default:
        preco = 5
        break;
    }
    console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)
    ```

    a) Para que serve o código acima?
R.: Para calcular o preço de frutas.
    b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
R.: "O preço da fruta Maçã é R$ 2.25"
    c) Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console se retirássemos o `break` que está logo acima do `default` (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?
R.: O comando irá partir para o próximo comando possível que contenha um BREAK, trazendo um preço de R$5,00. Mensagem:  "O preço da fruta Pêra é R$5"

3. Leia o código abaixo:

    ```jsx
    const numero = Number(prompt("Digite o primeiro número."))

    if(numero > 0) {
      console.log("Esse número passou no teste")
    	let mensagem = "Essa mensagem é secreta!!!"
    }

    console.log(mensagem)
    ```

    a) O que a primeira linha está fazendo?
R.: Está declarando uma constante 'numero' e solicitando um valor para ela via prompt.
    b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
R.: Digitando o número 10:  Esse número passou no teste
                            Essa mensagem é secreta!!!
    Digitando o número -10 não traria retorno.
    c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
R.: Não há erro, o número digitado (-10) está fora do escopo (números maiores que 0).
  */


///Exercícios de escrita de código
///1. Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir (apenas maiores de idade).

///    a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.

///    b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.

///    c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. Se sim, imprima no console `"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir."`

 let idadeUsuario = Number(prompt("Qual sua idade?"))
let idadeMinimaParaDirigir = 18
if (idadeUsuario >= idadeMinimaParaDirigir) {
    console.log("Você pode dirigir")
} else {console.log("Você não pode dirigir.")} 

///2. Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar **M** (matutino) ou **V** (Vespertino) ou **N** (Noturno). Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco `if/else`

 let turnoDoAluno = prompt("Em qual turno você estuda? Digite M (matutino) ou V (Vespertino) ou N (Noturno)")
if (turnoDoAluno === "M") {
    console.log("Bom dia!")
}
else if (turnoDoAluno === "V") {
    console.log("Boa Tarde!")
}
else if (turnoDoAluno === "N") {
    console.log("Boa Noite!")
}
 

///3. Repita o exercício anterior, mas utilizando a estrutura de `switch case` agora.

 let turnoDoAluno = prompt("Em qual turno você estuda? Digite M (matutino) ou V (Vespertino) ou N (Noturno)")
switch (turnoDoAluno) {
    case "M":
        console.log("Bom dia!")
        break
    case "V":
        console.log("Boa Tarde!")
        break
    case "N":
        console.log("Boa Noite!")
        break
}
 

///4. Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela só assistirá a um filme com você se ele for do gênero fantasia **e** se o ingresso está abaixo de 15 reais. Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir e outra pergunta sobre o preço do ingresso, então verifique se seu amigo ou amiga vai topar assistir o filme. Caso positivo, imprima no console a mensagem: `"Bom filme!"`, caso contrário, imprima `"Escolha outro filme :("`

 const generosFilmes = ["Fantasia", "Drama", "Romance", "Comédia"]

let generoEscolhido = prompt(`Escolha um gênero de filme: ${generosFilmes}`)

let precoFilme = Number(prompt("Qual o valor do ingresso?"))



if ((generoEscolhido == generosFilmes[0]) && (precoFilme < 15)) {
    console.log("Bom filme!")
}
else {console.log("Escolha outro filme :(")} 



///DESAFIOS
///1. Modifique o código do exercício 4 de escrita de código para, antes de imprimir a mensagem "Bom filme!", pergunte ao usuário, pelo prompt qual lanchinho ele vai comprar (pipoca, chocolate, doces, etc) e imprima no console as mensagens "Bom filme!" e "Aproveite o seu [LANCHINHO]", trocando [LANCHINHO] pelo que o usuário colocou no input.

 const generosFilmes = ["Fantasia", "Drama", "Romance", "Comédia"]

let generoEscolhido = prompt(`Escolha um gênero de filme: ${generosFilmes}`)

let precoFilme = Number(prompt("Qual o valor do ingresso?"))

let lanchinho = prompt("Qual snack que você quer comprar?")


if ((generoEscolhido == generosFilmes[0]) && (precoFilme < 15)) {
    console.log("Bom filme!")
    console.log(`Aproveite o seu ${lanchinho}`)
}
else {console.log("Escolha outro filme :(")}  

///2. Você foi contratado para criar um sistema de vendas de ingressos de jogos de um estádio de futebol. Para esta compra, o usuário deve fornecer algumas informações:
///    - Nome completo;
///    - Tipo de jogo: IN indica internacional; e DO indica doméstico;
///    - Etapa do jogo: SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final
///    - Categoria: pode ser as opções 1, 2, 3 ou 4;
///    - Quantidade de ingressos

///    O seu sistema deve solicitar estas informações ao usuário, através do `prompt` . Além disso, ele deve imprimir tudo isso, junto com o valor de cada ingresso e o valor total que o usuário tem que pagar (ou seja, o valor unitário do ingresso multiplicado pela quantidade). Abaixo, há a tabela com os valores de cada ingresso e exemplos de execução do programa. Lembrando que o valor de jogos internacionais é o mesmo de jogos domésticos, mas seus preços devem ser multiplicados pelo valor do dólar (considerar o dólar = R$4,10)

const semiFinais = [
    {categoria: 1, preco: 1320},
    {categoria: 2, preco: 880},
    {categoria: 3, preco: 550},
    {categoria: 4, preco: 220}
    ]
    
const terceiroLugar = [
    {categoria: 1, preco: 660},
    {categoria: 2, preco: 440},
    {categoria: 3, preco: 330},
    {categoria: 4, preco: 170}
    ]
    
const final = [
    {categoria: 1, preco: 1980},
    {categoria: 2, preco: 1320},
    {categoria: 3, preco: 880},
    {categoria: 4, preco: 330}
    ]
    

    let nomeCliente = prompt("Qual seu nome completo?").toUpperCase()

    let tipoDeJogo = prompt("Digite o tipo de jogo que deseja assistir: IN indica internacional e DO indica doméstico").toUpperCase()

    let etapaDeJogo = prompt("Digite a etapa do campeonato que deseja assistir: SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final").toUpperCase()

    let categoriaIngresso = Number(prompt("Qual categoria deseja comprar? Digite a opção desejada: 1, 2, 3 ou 4"))

    let quantidadeIngresso = Number(prompt("Qual a quantidade de ingressos desejada?"))


function calculaPrecoIngressos() {

    let dolar = (4.1)

    var xIngresso = tipoDeJogo.toUpperCase()
    if (xIngresso === "DO") {
            xIngresso = 1
    }
    else if (xIngresso === "IN") {
            xIngresso = (1/dolar)
    }

    let precoIngresso
    let selecionaCategoria = categoriaIngresso.toString()
 
    if (etapaDeJogo === "SF") {
        precoIngresso = ((quantidadeIngresso * semiFinais[(selecionaCategoria-1)].preco) * xIngresso)
    } else if (etapaDeJogo === "DT") {
        precoIngresso = ((quantidadeIngresso * terceiroLugar[(selecionaCategoria-1)].preco) * xIngresso)
    } else if (etapaDeJogo === "FI") {
        precoIngresso = ((quantidadeIngresso * final[(selecionaCategoria-1)].preco) * xIngresso)
    }
    
    if (tipoDeJogo === "DO") {
        console.log (`
            ---Dados da compra--- 
            Nome do cliente: ${nomeCliente}
            Tipo do jogo: ${tipoDeJogo.replace("DO","Doméstico")}
            Etapa do jogo: ${etapaDeJogo} 
            Categoria:  ${categoriaIngresso}
            Quantidade de Ingressos:  ${quantidadeIngresso} ingresso(s)  
            ---Valores--- 
            Valor do ingresso:  R$ ${precoIngresso/quantidadeIngresso}
            Valor total:  R$ ${precoIngresso.toFixed(2)}`
        )
    } else if (tipoDeJogo === "IN"){
        console.log (`
            ---Dados da compra--- 
            Nome do cliente: ${nomeCliente}
            Tipo do jogo: ${tipoDeJogo.replace("IN","Internacional")}
            Etapa do jogo:  ${etapaDeJogo}
            Categoria:  ${categoriaIngresso}
            Quantidade de Ingressos:  ${quantidadeIngresso} ingresso(s) 
            ---Valores--- 
            Valor do ingresso:  U$ ${(precoIngresso/quantidadeIngresso).toFixed(2)}
            Valor total:  U$  ${precoIngresso.toFixed(2)}`

        )
    }
        
    
}

calculaPrecoIngressos()