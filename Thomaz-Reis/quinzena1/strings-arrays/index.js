/// Exercícios de interpretação de código
/// 1.  Indique todas as mensagens impressas no console, **SEM EXECUTAR o programa**.
/* 

    let array
    console.log('a. ', array) /// a. Undefined, visto que não foram definidos valores

    array = null
    console.log('b. ', array) /// b. null

    array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
    console.log('c. ', array.length) /// c. 11

    let i = 0
    console.log('d. ', array[i]) /// d. 3

    array[i+1] = 19
    console.log('e. ', array) /// ???

    const valor = array[i+6]
    console.log('f. ', valor) /// f. 9 (i = 0 > posição 0 no array é 3 & valor = i + 6 > valor = 3 + 6)
     */
 
///2. Leia o código abaixo com atenção 

   /*  
    const frase = prompt("Digite uma frase")

    console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)
    

    Qual será o valor impresso no console se a entrada do usuário for: `"Subi num ônibus em Marrocos"`? 
    R: Irá imprimir toda a frase em maiúsculo e substituindo todos os A por I, depois irá imprimir o comprimento da frase (com espaços): SUBI NUM ÔNIBUS EM MIRROCOS 27
  */

////     - **Exercícios de escrita de código**
    /// 1. Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, imprima na tela a seguinte mensagem:

    ///  O e-mail `emailDoUsuario` foi cadastrado com sucesso. Seja bem-vinda(o), `nomeDoUsuario`!
    
 
    const nomeDoUsuario = prompt("Digite um nome de usuário.")
    const emailDoUsuario = prompt("Digite seu email.")

    console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeDoUsuario}!`)


    /// 2. Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. Em seguida, siga os passos:
    ///   a) Imprima na tela o array completo
    let favComidas = ['Churrasco','Feijoada','Feijão tropeiro','Macarrão','Pizza']
    console.log (favComidas)
    ///    b) Imprima na tela a mensagem "Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas, **uma embaixo da outra**.
    console.log("Essas são as minhas comidas preferidas: ")
    console.log (favComidas[0])
    console.log (favComidas[1])
    console.log (favComidas[2])
    console.log (favComidas[3])
    console.log (favComidas[4])
    ///    c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima na tela a nova lista
    const escolha = prompt("Qual sua comida preferida?")
    favComidas[1]= escolha
    console.log("Essas são as minhas novas comidas preferidas: ",favComidas)
  
    ///3. Faça um programa, seguindo os passos:
    ///   a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`
    let listaDeTarefas = []
    ///   b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array
    const tarefa1 = prompt("Digite a primeira tarefa do dia (número 0)")
    const tarefa2 = prompt("Digite a segunda tarefa do dia (número 1)")
    const tarefa3 = prompt("Digite a terceira tarefa do dia (número 2)")
    ///   c) Imprima o array na tela
    listaDeTarefas = Array.of(tarefa1,tarefa2,tarefa3)
    console.log(listaDeTarefas)
    ///   d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2 
    const escolheTarefa = Number(prompt("Seleciona a tarefa já executada (0, 1 ou 2)"))
    ///    e) Remova da lista o item de índice que o usuário escolheu.
    listaDeTarefas.splice(escolheTarefa,1)
    ///    f) Imprima o array na tela
    console.log(listaDeTarefas) 
  

   /// ***DESAFIOS***
   /// 1. Receba uma frase e retorne um array onde cada elemento é uma das palavras da frase, ignorando os espaços
 const frase = prompt ("Digite uma frase")
var fraseConcatenada = frase.split(' ')

console.log(fraseConcatenada) 

   /// 2. Dado o array `["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]`, faça um programa que acha o índice da palavra Abacaxi e imprime tanto o índice quanto o tamanho do array
let meuArray = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]

console.log("Índice de Abacaxi:",meuArray.indexOf("Abacaxi"),", Tamanho do array:",meuArray.length)
