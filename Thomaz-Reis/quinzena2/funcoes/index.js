///////- **Exercícios de interpretação de código**
    /*  1. Leia o código abaixo

    
    function minhaFuncao(variavel) {
        return variavel * 5
    }

    console.log(minhaFuncao(2))
    console.log(minhaFuncao(10))
    ```

    a) O que vai ser impresso no console?
    R: 10
        50
    b) O que aconteceria se retirasse os dois `console.log` e simplesmente invocasse a função `minhaFuncao(2)` e `minhaFuncao(10)`? O que apareceria no console?
    R: Nada aconteceria, pois a função 'minhaFuncao' não manda nenhum comando para o console.
2. Leia o código abaixo

    
    let textoDoUsuario = prompt("Insira um texto");

    const outraFuncao = function(texto) {
        return texto.toLowerCase().includes("cenoura")
    }

    const resposta = outraFuncao(textoDoUsuario)
    console.log(resposta)
    ```

    a. Explique o que essa função faz e qual é sua utilidade
    R: Essa função solicita a entrada de um texto pelo usuário e verifica se há a palavra 'cenoura' sem diferenciar maiúsculas e minúsculas e, caso positivo, retorna TRUE. Ajuda a confirmar se há uma palavra em determinado texto.

    b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
         i.   `Eu gosto de cenoura` TRUE
         ii.  `CENOURA é bom pra vista` TRUE
         iii. `Cenouras crescem na terra` TRUE 

 */
/// **Exercícios de escrita de código**
    /*  1. Escreva as funções explicadas abaixo:

        a) A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas informações sobre você, como: 

        
        "Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante." */
        
        function sobreMim (){
            console.log ("Eu sou Thomaz, tenho 29 anos, moro em BH e sou estudante da Labenu.")
        }

        sobreMim()

////    Troque o nome, idade, cidade e se é estudante ou não por informações sobre você. Lembrando que a função não possui entradas, apenas imprime essa mensagem.

    /// b)  Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: o nome (`string`), a idade (`number`), a cidade (`string`) e uma profissão (`string`). Ela deve retornar uma `string` que unifique todas as informações da pessoa em uma só mensagem com o template:

 /*        ```
        Eu sou [NOME], tenho [IDADE] anos, moro em [ENDEREÇO] e sou [PROFISSÃO].
        ```

        - Exemplo

            Para a entrada:  `"Laís"`, `23`, `"São Paulo"` e `"instrutora"`, deve retornar:

            `"Eu sou Laís, tenho 23 anos, moro em Rua Guarapari 190 e sou instrutora."` */

    function sobreMim (){
      const nome = prompt("Qual seu nome?")
      const idade = prompt("Qual sua idade?")
      const endereco = prompt("Qual seu endereço?")
      const profissao = prompt("Qual sua profissão?")
      console.log (`Eu sou ${nome}, tenho ${idade} anos, moro em ${endereco} e sou ${profissao}`)
    }

        sobreMim()



/*     2. Escreva as funções explicadas abaixo:

        a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e retorne o resultado. Invoque a função e imprima no console o resultado. */

    function soma(){
        const numero1 = Number(prompt("Digite um número"))
        const numero2 = Number(prompt("Digite um outro número"))
        console.log(numero1+numero2)
    }    
    soma()

    ///    b) Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é **maior ou igual** ao segundo.

    function maiorOuIgual(){
        const numero1 = Number(prompt("Digite um número"))
        const numero2 = Number(prompt("Digite um outro número"))
        console.log(numero1>=numero2)
    }    
    maiorOuIgual()
    
   
    ///    c) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não

    function ehPar(){
        const numero1 = Number(prompt("Digite um número"))
        console.log(numero1 % 2 === 0)
    }    
    ehPar()

    
    ///    d) Faça uma função que recebe uma mensagem (`string`) como parâmetro e imprima o tamanho dessa mensagem, juntamente com uma versão dela em letras maiúsculas.

function tamanhoPalavra(){
    const palavra = prompt("Digite uma palavra")
    console.log(palavra.length,palavra.toUpperCase())
}    
tamanhoPalavra()


/*     3. Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão). Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores inputados pelo usuário sendo o argumento. Por fim, mostre no console o resultado das operações:


        ```
        Números inseridos: 30 e 3
        Soma: 33
        Diferença: 27
        Multiplicação: 90
        Divisão: 10
        ```  */
      
    const numero1 = Number(prompt("Digite um número"))
    const numero2 = Number(prompt("Digite um outro número")) 

    function somaNumeros () {
    const soma = numero1+numero2
    return soma
}

    function subtraiNumeros () {
    const subt = numero1-numero2
    return subt
}

    function multiplicaNumeros () {
    const mult = numero1*numero2
    return mult
}

    function divideNumeros () {
    const divid = numero1/numero2
    return divid
}

    console.log(`Números inseridos: ${numero1} e ${numero2}`)
    console.log("Soma:",somaNumeros())
    console.log("Diferença:",subtraiNumeros())
    console.log("Multiplicação:",multiplicaNumeros())
    console.log("Divisão:",divideNumeros())
   



//////DESAFIOS
////1. Funções são trechos de códigos como quaisquer outros mas que podemos acessá-los mais de uma vez ao longo do código através de invocações/chamadas. Então, funções podem chamar/invocar outras funções também. Sua tarefa é escrever duas funções

////    a) Escreva uma *arrow function* que recebe um parâmetro e imprime no console esse parâmetro 
/*  let pi = 3.14159
let area = (pi*(raio * raio))
var raio = (circun/(2*pi))
var circun = (2 * pi * raio)

let calculaAreaCirculo = (area) => {
    raio = Number(prompt("Qual o raio do círculo?"))
    console.log("A área do círculo com raio",raio,"é",area)
return raio
}

let areaCalculada = calculaAreaCirculo ()


////    b) Escreva outra *arrow function* que recebe dois valores como parâmetros mas **nenhum retorno.** Faça a soma entre esses valores e chame a sua primeira função mandando este resultado da soma como entrada para imprimi-lo 

let calculaRaio = (circun) => {
    circun = Number(prompt("Qual a circunferência do círculo?"))
  ////  raio = (circun/2*pi)
    console.log("O raio do círculo com circunferência",circun,"é",raio)
    return circun
}
let raioCirculo = calculaRaio() 
calculaAreaCirculo (calculaRaio())
 */ 

///2. Faça uma função que execute o teorema de Pitágoras, recebendo dois catetos e calculando o valor da hipotenusa. Retorne este valor, invoque a função e imprima o resultado no console. 
///Dica
///    A fórmula do teorema é: hip² = a² + b² , onde hip é a hipotenusa e a e b são os catetos. 
///    É necessário isolar a hipotenusa, então ao final temos: **hip = √(a² + b²)**

     function calculaHipotenusa () {
        let cateto1 = Number(prompt("Qual o valor do cateto adjacente?"))
        let cateto2 = Number(prompt("Qual o valor do cateto oposto?"))
        let hipotenusa = Math.hypot(cateto1,cateto2)
        console.log("O valor da hipotenusa é",hipotenusa)
    }
    calculaHipotenusa() 