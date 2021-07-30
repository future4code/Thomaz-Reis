/*   Exercícios de interpretação de código
 1.  Leia o código abaixo

    
    const filme = {
    	nome: "Auto da Compadecida", 
    	ano: 2000, 
    	elenco: [
    		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
    		"Virginia Cavendish"
    		], 
    	transmissoesHoje: [
    		{canal: "Telecine", horario: "21h"}, 
    		{canal: "Canal Brasil", horario: "19h"}, 
    		{canal: "Globo", horario: "14h"}
    		]
    }

    console.log(filme.elenco[0])
    console.log(filme.elenco[filme.elenco.length - 1])
    console.log(filme.transmissoesHoje[2])
    

    a) O que vai ser impresso no console?
    R.: Matheus Nachtergaele
        Virginia Cavendish (retorna o último item)
        canal: "Globo", horario: "14h"

2. Leia o código abaixo

    
    const cachorro = {
    	nome: "Juca", 
    	idade: 3, 
    	raca: "SRD"
    }

    const gato = {...cachorro, nome: "Juba"}

    const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

    console.log(cachorro)
    console.log(gato)
    console.log(tartaruga)
    

    a) O que vai ser impresso no console?
    R.: 
        nome: "Juca", 
    	idade: 3, 
    	raca: "SRD"

        nome: "Juba", 
    	idade: 3, 
    	raca: "SRD"       
        
        nome: "Jubo", 
    	idade: 3, 
    	raca: "SRD"

    b) O que faz a sintaxe dos três pontos antes do nome de um objeto?
    
    R.: Faz uma cópia inteira de um objeto para outro, permitindo mudar ou adicionar propriedades.
    
3. Leia o código abaixo

    
    function minhaFuncao(objeto, propriedade) {
    	return objeto[propriedade]
    }

    const pessoa = {
      nome: "Caio", 
      idade: 23, 
      backender: false
    }

    console.log(minhaFuncao(pessoa, "backender"))
    console.log(minhaFuncao(pessoa, "altura"))
    

    a) O que vai ser impresso no console?
    R.: undefined
    b) Explique o valor impresso no console. Você sabe por que isso aconteceu?
    R.: "altura" não é uma propriedade definida no objeto 'pessoa'
 
 */
 ////Exercícios de escrita de código
 ////1. Resolva os passos a seguir: 

    ////a) Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos (um array que sempre terá exatamente **três apelidos**). Depois, escreva uma função que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo**:** 

     
    // Exemplo de entrada
   /*  const pessoa = {
       nome: "Amanda", 
       apelidos: ["Amandinha", "Mandinha", "Mandi"]
    }
 */
    // Exemplo de saída
    //"Eu sou Amanda, mas pode me chamar de: Amandinha, Mandinha ou Mandi"
     

     const sobreMim = {
        nome: "Thomaz",
        apelidos: ["Tom", "Augustinho","Capila"]
    }

    function falaSobreMim (sobreMim) {
    console.log(`Eu sou ${sobreMim.nome}, mas pode me chamar de: ${sobreMim.apelidos[0]}, ${sobreMim.apelidos[1]} ou ${sobreMim.apelidos[2]}`)
    }
    falaSobreMim (sobreMim)

    
///     b) Agora, usando **o operador spread**, crie um novo objeto mantendo o valor da propriedade nome, mas com uma nova lista de três apelidos. Depois, chame a função feita no item anterior passando como argumento o novo objeto

    const sobreMimNovo = {
        ...sobreMim,
        apelidos: ["Passarinho","Augustão","Tumais"]
    }

    falaSobreMim (sobreMimNovo) 

////2. Resolva os passos a seguir: 

////    a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão. 

 const pessoas = {
    pessoa1: {
        nome: 'Thomaz',
        idade: 29,
        profissao: 'Analista de Suporte Jr'
    },

    pessoa2: {
        nome: 'Otávio',
        idade: 24,
        profissao: 'Desenvolvedor Fullstack'
    },
}
////    b) Escreva uma função que receba esses objetos e retorne um array com as seguintes informações:

function sobrePessoa() {
console.log([pessoas.pessoa1.nome, pessoas.pessoa1.nome.length, pessoas.pessoa1.idade, pessoas.pessoa1.profissao, pessoas.pessoa1.profissao.length])
console.log([pessoas.pessoa2.nome, pessoas.pessoa2.nome.length, pessoas.pessoa2.idade, pessoas.pessoa2.profissao, pessoas.pessoa2.profissao.length])
}

sobrePessoa()
      
 
////3. Resolva os passos a seguir: 

////    a) Crie uma variável de escopo global que guarde um `array` vazio chamada `carrinho`

let carrinho = []

////    b) Crie três novos objetos que representem frutas de um sacolão. Eles devem ter as seguintes propriedades: nome (`string`) e disponibilidade (`boolean` - devem começar como `true`)

const fruta1= {
        nome: "Banana",
        disponibilidade: true
    }

const fruta2 = {
        nome: "Uva",
        disponibilidade: true
    }

const fruta3 = {
        nome: "Abacaxi",
        disponibilidade: true
    }

///console.log(frutasSacolao)
////    c) Crie uma função que **receba** um objeto fruta por **parâmetro** e coloque-a dentro do array de `carrinho`. Invoque essa função passando os três objetos criados. 

function adicionaCarrinho() {
    carrinho.push(fruta1)  
    carrinho.push(fruta2)  
    carrinho.push(fruta3)
    console.log(carrinho)  
}

////    d) Imprima a variável `carrinho` e garanta que ela agora seja um array preenchido com três objetos.

adicionaCarrinho()

 
//DESAFIOS**
////    1. Crie um função que pergunte ao usuário seu nome, sua idade e sua profissão e depois imprima no console um objeto com essas propriedades. Depois de imprimir o novo objeto, imprima também o **tipo** dele para garantir que é um **objeto.**

function questionario() {
    const nome = prompt("Qual seu nome?")
    const idade = prompt("Qual sua idade?")
    const profissao = prompt("Qual sua profissão?")

    console.log(dadosPessoa = {nome, idade, profissao},typeof dadosPessoa)

}

questionario()

 

////    2. Crie uma função que receba dois objetos que representam filmes. Eles devem ter as propriedades: ano de lançamento e nome. A função deve retornar uma mensagem no seguinte modelo:

function comparaFilmes() {
const filme1 = {anoLancamento: 2002, nome: 'LOTR - As Duas Torres'}
const filme2 = {anoLancamento: 2003, nome: 'LOTR - O Retorno do Rei'}

console.log ('O primeiro filme foi lançado antes do segundo?', filme1.anoLancamento < filme2.anoLancamento)
console.log ('O primeiro filme foi lançado no mesmo ano do segundo?', filme1.anoLancamento == filme2.anoLancamento)
}
comparaFilmes()
    
 
////    3. Crie uma função a mais pro exercício 3 de escrita de código. Essa função vai auxiliar o controle de estoque do sacolão: ela deve receber por parâmetro uma das frutas e retornar esse mesmo objeto com a propriedade `disponibilidade` com o valor invertido. 

function controlaEstoque () {
    const escolheFruta = prompt("Qual fruta quer comprar? Banana, Uva ou Abacaxi?")
            
        if (escolheFruta.toLowerCase() == carrinho[0].nome.toLowerCase()) {
            console.log(carrinho[0].nome,!carrinho[0].disponibilidade)
        }
        else if (escolheFruta.toLowerCase() == carrinho[1].nome.toLowerCase()) {
            console.log(carrinho[1].nome,!carrinho[1].disponibilidade)
        }
        else if (escolheFruta.toLowerCase() == carrinho[2].nome.toLowerCase()) {
            console.log(carrinho[2].nome,!carrinho[2].disponibilidade)
        }
        else (console.log("Fruta não encontrada!"))
    }

controlaEstoque()