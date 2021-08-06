/* Exercícios de interpretação de código
Tente responder os exercícios dessa seção sem executar o código. Se ficar muito difícil, pode rodar no seu computador **para analisar e pensar sobre o resultado.** 

1. O que o código abaixo está fazendo? Qual o resultado impresso no console?

    
    let valor = 0
    for(let i = 0; i < 5; i++) {
      valor += i
    }
    console.log(valor)
    
    R.: Está incrementando (+1) o valor de i em loop até o limite de i = 5.

2. Leia o código abaixo:

    
    const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
    for (let numero of lista) {
      if (numero > 18) {
    		console.log(numero)
    	}
    }
    

    a) O que vai ser impresso no console?
    R. Todos os números maiores que 18.

    b) Se eu quisesse acessar o **índice** de cada elemento dessa lista, o `for...of...` é suficiente? Se 'sim'(??), o que poderia ser usado para fazer isso?
    R.: É necessário utilizar o indexOf.

3. Qual seria o resultado impresso no console, se o usuário digitasse o número `4` ?

   
    const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
    let quantidadeAtual = 0
    while(quantidadeAtual < quantidadeTotal){
      let linha = ""
      for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
        linha += "*"
      }
      console.log(linha)
      quantidadeAtual++
    }

    R.: *
        **
        ***
        ****

     */


/*  Exercícios de escrita de código
1. Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável. 

    a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"

    b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um, e guarde esses nomes em um array

    c) Por fim, imprima o array com os nomes dos bichinhos no console  */

let qtdAnimais = Number(prompt("Quantos animais de estimação você tem?"))
let funcaoPet = (qtdAnimais) => {
    let listaDeAnimais = [];
    if (qtdAnimais === 0) {
        console.log("Que pena! Você pode adotar um pet!")
    } else {
        for (i=0; i < qtdAnimais; i++) {
            nomePet = prompt("Qual o nome de um dos seus pets?");
            listaDeAnimais.push(nomePet)
            
        }
        console.log(`Meus pets são: ${listaDeAnimais}`)
    }
}    
funcaoPet(qtdAnimais) 

/// 2. Considere que você tenha acesso a um `array`  (chamado de 'array original') que é composto somente de números. Baseando-se nisso, crie uma função para cada um dos itens abaixo, realizando as operações pedidas:

let arrayOriginal = [80, 30, 139, 40, 60, 21, 70, 120, 90, 103, 110, 55]

///    a) Escreva um programa que **imprime** cada um dos valores do array original.
 for (let numero of arrayOriginal) {
    console.log(numero)
}
///    b) Escreva um programa que **imprime** cada um dos valores do array original divididos por 10
for (let numero of arrayOriginal) {
    console.log(numero/10)
} 


///    c) Escreva um programa que **crie** um novo array contendo, somente, os números pares do array original e **imprima** esse novo array

let arrayPares = []
function addPares (arrayPares) {
for (let numero of arrayOriginal) {
    if (numero % 2 === 0) {
    arrayPares.push(numero)
    }
  }
  console.log(`Array de números pares é ${arrayPares}`)
}
addPares(arrayPares)

///    d) Escreva um programa que **crie** um novo array contendo strings, da seguinte forma: "O elemento do índex `i` é: `numero`". Depois, **imprima** este novo array.

function indexArray(arrayOriginal) {
    for (let numero of arrayOriginal) {
        console.log(`O elemento do índex ${arrayOriginal.indexOf(numero)} é ${numero}`)
      }
    }
indexArray(arrayOriginal)

///    e) Escreva um programa que imprima no console o maior e o menor números contidos no array original

let valorMaximo = 0
let valorMinimo = 140

function maiorEMenorNumeros(arrayOriginal) {
    for (let numero of arrayOriginal) {
        if (numero > valorMaximo) {
            valorMaximo = numero
        } else if (numero < valorMinimo) {
                valorMinimo = numero
        }
      }
      console.log(`O maior número é ${valorMaximo} e o menor é ${valorMinimo}`)
    }
    maiorEMenorNumeros(arrayOriginal)


 
///DESAFIOS
/* 1. Neste exercício vocês vão implementar uma brincadeira muito simples: "Adivinhe o número que estou pensando". Ele deve ser jogado entre duas pessoas. 

    Inicialmente, uma das pessoas insere qual o número em que ela pensou. A outra pessoa tem que ficar chutando até acertar em cheio o número. Esta é uma tarefa difícil, então quem escolheu o número fica dando umas dicas para a outra pessoa, indicando se o número que ela pensou é maior ou menor do que o chute em si. Veja, abaixo, um exemplo de partida:

    ```
    Vamos jogar!
    O número chutado foi: 3
    Errrrrrrrou, é maior
    O número chutado foi: 18
    Errrrrrrrou, é menor
    O número chutado foi: 15
    Errrrrrrrou, é menor
    O número chutado foi: 11
    Acertou!!
    O número de tentativas foi: 4 

    ```

    Um resumo das funcionalidades são:

    a) Solicitar que o primeiro jogador escolha um número, através do `prompt`. Neste momento, deve-se imprimir no console a mensagem `Vamos jogar!`

    b) A partir daí, será solicitado, ao segundo jogador, que ele chute os números até acertar, através do `prompt`. A cada chute, deve ser informado no console:

    - O número chutado, com a mensagem: `O número chutado foi: <número>`
    - Uma mensagem dizendo se o número escolhido é maior ou menor do que o número chutado: `Errou. O número escolhido é maior/menor`

    c) Quando o segundo jogador acertar o número escolhido pelo primeiro jogador, deve ser impressa a mensagem: `Acertou` ; e, embaixo, `O número de tentativas foi : <quantos chutes o usuário deu>`
 */
 

const numeroEscolhido = Number(prompt("Defina um número inicial!"))    
console.log("Vamos jogar!")

function chute () {
    let tentativas = 0
    let numeroChute =  Number(prompt("Digite seu chute"));

    while (numeroChute !== numeroEscolhido) {
        console.log(`O número chutado foi: ${numeroChute}`);
            if (numeroChute > numeroEscolhido) {
                    console.log(`Errou. O número escolhido é menor do que o número chutado`)
                    numeroChute =  Number(prompt("Digite um novo chute"));
            } else if (numeroChute < numeroEscolhido) {
                    console.log(`Errou. O número escolhido é maior do que o número chutado`)
                    numeroChute =  Number(prompt("Digite um novo  chute"));
            }
                tentativas++
            }
    if (numeroChute == numeroEscolhido) {
        console.log(`O número chutado foi: ${numeroChute}`);
        console.log(`Acertou`)
        console.log(`O número de tentativas erradas foi: ${tentativas}`)
        tentativas++
        }
    }  
chute () 

///2. Uma das principais características de uma boa pessoa programadora é conseguir resolver seus problemas independentemente. Queremos que você comece a treinar isso a partir de hoje! Então, vamos pedir para que você faça uma alteração no código acima. Agora, ao invés de ter 2 jogadores, haverá um só; e o seu adversário será o computador. A ideia é: ao iniciar o jogo, você deve sortear um número aleatório (entre 1 e 100) e o usuário terá que ficar chutando o valor até acertar. Mantenha as demais funcionalidades e mensagens pedidas no exercício anterior.

    ////Quando resolver o exercício, pare e faça a seguinte reflexão: foi fácil fazer esta alteração? O que você poderia ter feito para que fosse mais fácil? **Deixe comentários no seu código sobre esta reflexão.**
/// R.: Mais ou menos fácil, declarei uma variável com nome novo, então tive de substituir as informações no código.    
    
    
    
const numeroAleatorio = (Math.floor(Math.random() * 100) + 1); ///Difícil acertar o código para gerar um número inteiro
    
console.log("Vamos jogar!")
       
function chute () {
    let tentativas = 0
    let numeroChute =  Number(prompt("Digite seu chute"));
    
    while (numeroChute !== numeroAleatorio) {
        console.log(`O número chutado foi: ${numeroChute}`);
            if (numeroChute > numeroAleatorio) {
                    console.log(`Errou. O número escolhido é menor do que o número chutado`)
                    numeroChute =  Number(prompt("Digite um novo chute"));
            } else if (numeroChute < numeroAleatorio) {
                    console.log(`Errou. O número escolhido é maior do que o número chutado`)
                    numeroChute =  Number(prompt("Digite um novo  chute"));
            }
                tentativas++
        }
    if (numeroChute == numeroAleatorio) {
        console.log(`O número chutado foi: ${numeroChute}`);
        console.log(`Acertou`)
        console.log(`O número de tentativas erradas foi: ${tentativas}`)
        
        tentativas++
    }
}  
    
chute ()