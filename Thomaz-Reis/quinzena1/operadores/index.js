// - **Exercícios de interpretação de código**
//    1. Leia o código abaixo. Indique todas as mensagens impressas no console,
//     **SEM EXECUTAR o programa**.

        
        const bool1 = true
        const bool2 = false
        const bool3 = !bool2

        let resultado = bool1 && bool2
        console.log("a. ", resultado) ////a. false, POIS A string BOOL2 É false

        resultado = bool1 && bool2 && bool3 
        console.log("b. ", resultado) ////b. false, POIS A string BOOL2 É false

        resultado = !resultado && (bool1 || bool2) ////true, JÁ QUE (bool1 || bool2) É true E !resultado É true TAMBÉM
        console.log("c. ", resultado) 

        console.log("d. ", typeof resultado) /// d. boolean, OPERADORES LÓGICOS RETORNAM SEMPRE RESULTADO BOOLEANO (true OU false)
        

//    2. Seu colega se aproxima de você falando que o código dele não funciona como devia.
//      Vamos ajudá-lo: consegue perceber algum problema? O que será impresso no console? 

//\        R.: NÃO CONVERTENDO A string PARA Number, O PROGRAMA IRÁ IMPRIMIR NO CONSOLE 
//\       A JUNÇÃO DAS DUAS 'PALAVRAS' DIGITADAS NO PROMPT. 
//\        EXEMPLO: DIGITEI 1 E DEPOIS DIGITEI 2, O PROGRMA IRÁ IMPRIMIR '12'.
        
//        let primeiroNumero = prompt("Digite um numero!")
//        let segundoNumero = prompt("Digite outro numero!")

//        const soma = primeiroNumero + segundoNumero

//        console.log(soma) 
        

//    3. Para o exercício anterior, sugira ao seu colega uma solução para que o valor     impresso no console seja, de fato, a soma dos dois números.
//    SUGESTÃO: 
//        let primeiroNumero = Number(prompt("Digite um numero!"))
//        let segundoNumero = Number(prompt("Digite outro numero!"))

////------------------------- 

///   - **Exercícios de escrita de código**
//1. Faça um programa que:

//        a) Pergunte a idade do usuário

let suaIdade = Number(prompt("Digite sua idade"))

//        b) Pergunte a idade do seu melhor amigo ou da sua melhor amiga

let idadeAmigx = Number(prompt("Digite a idade do seu(sua) melhor amigo(a)"))

//        c) **Imprima na console** a seguinte mensagem: 
//     "Sua idade é maior do que a do seu melhor amigo?", seguido pela resposta (`true` ou `false`)

let idadeMaior = suaIdade > idadeAmigx
console.log ("Sua idade é maior do que a do seu melhor amigo?", idadeMaior)

 //       d) **Imprima na console** a diferença de idade (não tem problema se sair um número negativo)

 let difIdade = suaIdade - idadeAmigx
 console.log ("Diferença de idade:", difIdade)        
 

    //2. Faça um programa que:

    //a) Peça ao usuário que insira um número **par**

const numeroPar = Number(prompt("Digite um número par"))

    //b) Imprima na console **o resto da divisão** desse número por 2.

console.log ("Resto da divisao:",(numeroPar % 2))    
 
    //c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.
//O RESTO DA DIVISÃO DE QUALQUER NÚMERO PAR DIVIDIDO POR 2 SEMPRE SERÁ ZERO.
    //d) O que acontece se o usuário inserir um número ímpar? Escreva em um comentário de código
//O RESTO DA DIVISÃO DE QUALQUER NÚMERO ÍMPAR DIVIDIDO POR 2 SEMPRE SERÁ UM.
        

//    3. Faça um programa que pergunte ao usuário sua idade em anos. Depois, imprima no console 
const idade = Number(prompt("Digite sua idade em anos"))
//        a) A idade do usuário em meses
console.log(idade*12)
//        b) A idade do usuário em dias
console.log(idade*365)
//        c) A idade do usuário em horas
console.log(idade*365*24)

///    4. Faça um programa que pergunte ao usuário dois números. 
///     Em seguida, faça as operações e imprima no console as seguintes mensagens:

        
        O primeiro numero é maior que segundo? true ou false
        O primeiro numero é igual ao segundo? true ou false
        O primeiro numero é divisível pelo segundo? true ou false
        O segundo numero é divisível pelo primeiro? true ou false 

        
//// obs: O resultado true ou false vai depender dos números inseridos e do resultado das operações.
        
    let primeiroNumero = Number(prompt("Digite um numero!"))
    let segundoNumero = Number(prompt("Digite outro numero!"))

    let maior = primeiroNumero > segundoNumero
    console.log ("O primeiro numero é maior que segundo?",maior)

    let igual = primeiroNumero === segundoNumero
    console.log ("O primeiro numero é igual ao segundo??",igual)

    let divide1 = (primeiroNumero % segundoNumero) == 0
    console.log ("O primeiro numero é divisível pelo segundo?",divide1)


    let divide2 = (segundoNumero % primeiroNumero) == 0
    console.log ("O segundo numero é divisível pelo primeiro?",divide2)
     

////------------------------- 

   ///  - **DESAFIOS**

//    Todos os exercícios aqui são de escrita de código! 

//   1. Para este exercício, será necessário o conhecimento das fórmulas para mudar a unidade de temperatura entre Graus Celsius(°C),  Graus Fahrenheit(°F) e Kelvin(K). Abaixo estão duas delas:
//       - Graus Fahrenheit(°F) para Kelvin(K)

//            ```
//            (KELVIN) = (GRAUS_FAHRENHEIT - 32)*(5/9) + 273.15
//            ```

//        - Graus Celsius(°C) para Graus Fahrenheit (°C)

//            ```
//            (GRAUS_FAHRENHEIT) = (GRAUS_CELSIUS)*(9/5) + 32
//            ```
 
        ///a) Calcule e mostre o valor de 77°F em  K, mostrando a unidade no console também.

let fahren = 77
let kelvin = (fahren-32)*(5/9) + 273.15

console.log(fahren+"°F em Kelvin =", kelvin,"K")

        ///b) Calcule e mostre o valor de 80°C em °F, mostrando a unidade no console também
let celsius = 80
fahren = (celsius)*(9/5)+32

console.log(celsius+"°C em Fahrenheit =", fahren+"°F")

        ///c) Calcule e mostre o valor de 30°C em °F e K, mostrando as unidades no console também

celsius = 30
fahren = (celsius)*(9/5)+32
kelvin = (celsius + 273.15)        

console.log(celsius+"°C em Fahrenheit =", fahren+"°F")
console.log(celsius+"°C em Kelvin =", kelvin+"K")

        ///d) Altere o último item para que o usuário insira o valor em graus Celsius que ele deseja converter

let celsius = Number(prompt ("Digite a temperatura em °C"))
fahren = (celsius)*(9/5)+32
kelvin = (celsius + 273.15)        

console.log(celsius+"°C em Fahrenheit =", fahren+"°F")
console.log(celsius+"°C em Kelvin =", kelvin+"K")
 

//     2. Quilowatt-hora é uma unidade de energia; e é muito utilizada para se determinar o consumo de energia elétrica em residências. Sabe-se que o quilowatt-hora de energia custa R$0.05. Faça um programa que receba a quantidade de quilowatts consumida por uma residência.

//     a) Calcule e mostre o valor a ser pago por uma residência que consuma 280 quilowatt-hora
     
const consumoWatts = 280
const custoWatts = 0.05
const precoWattsHora = consumoWatts * custoWatts

console.log("Valor pago é R$"+consumoWatts*custoWatts)


 //     b) Altere o programa para receber mais um valor: a porcentagem de desconto. Calcule e mostre o valor a ser pago pela mesma residência acima considerando 15% de desconto

 const desconto = precoWattsHora*15/100
 const valorComDesconto = precoWattsHora - desconto
 console.log("Valor pago com desconto é R$"+valorComDesconto)
   

//     3. Um grande problema que o mundo tem atualmente é a quantidade de unidades que existem para representar a mesma coisa. Por exemplo, para representar a Massa de um corpo, podemos usar quilograma (kg), onça (oz) e até libra (lb). Para representar Distâncias, existem metro (m), pés (ft), milha (mi). Até para volumes, há várias opções: litro (l), galão (gal),  xícaras (xic). Dada essa introdução, faça o que se pede:
 
//        a) Procure uma forma de converter libra (lb) para quilograma (kg) e escreva um programa que converta 20lb para kg. Imprima  a resposta no console da seguinte forma: 
//        `20lb equivalem a X kg`
const lb = 0.453592
console.log ("20lb equivalem a",20*lb,"kg")

//        b) Procure uma forma de converter onça (oz) para quilograma (kg) e escreva um programa que converta 10.5oz para kg. Imprima  a resposta no console da seguinte forma: 
//        `10.5oz equivalem a X kg`
const oz = 0.0283495
console.log ("10.5oz equivalem a",10.5*oz,"kg")

//       c) Procure uma forma de converter milha (mi) para metro (m) e escreva um programa que converta 100mi para m. Imprima  a resposta no console da seguinte forma: 
//        `100mi equivalem a X m`
const mi = 1609.34
console.log ("100mi equivalem a",100*mi,"m")

//        d) Procure uma forma de converter pés (ft) para metro (m) e escreva um programa que converta 50ft para m. Imprima  a resposta no console da seguinte forma: 
//        `50ft equivalem a X m`
const ft = 0.3048
console.log ("50ft equivalem a",50*ft,"m")

//        e) Procure uma forma de converter galão (gal) para litro (l) e escreva um programa que converta 103.56gal para litro. Imprima  a resposta no console da seguinte forma: 
//        `103.56gal equivalem a X l`
const gal = 3.78541
console.log ("103.56gal equivalem a",103.56*gal,"l")

//        f) Procure uma forma de converter xícara (xic) para litro (l) e escreva um programa que converta 450xic para litro. Imprima  a resposta no console da seguinte forma: 
//        `450 xic equivalem a X l`
const xic = 0.284131
console.log ("450 xic equivalem a",450*xic,"l")

//        g) Escolha ao menos **um** dos itens anteriores e modifique o programa para que ele peça ao usuário o valor da unidade original antes de converter

const calculo = Number(prompt("Digite uma medida em milhas"))
console.log (calculo,"milhas equivalem a",calculo*mi,"m")
        