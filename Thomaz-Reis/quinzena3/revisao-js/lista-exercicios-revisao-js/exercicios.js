 // EXERCÍCIO 01
function inverteArray(array) {
  let arrayReverso = [ ]
    for (var i = array.length - 1; i >= 0; i--) {
        arrayReverso.push (array[i])
      }
    return arrayReverso
}

// EXERCÍCIO 02
function retornaNumerosParesElevadosADois(array) {
  let arrayAoQuadrado = [ ]
  for (let numeroPar of array) {
    if (numeroPar % 2 === 0) {
      let numeroParAoQuadrado = (numeroPar*numeroPar)
      arrayAoQuadrado.push (numeroParAoQuadrado)
    }
  }
  return arrayAoQuadrado
}

// EXERCÍCIO 03
function retornaNumerosPares(array) {
  let arraySohPares = [ ]
  for (let numeroPar of array) {
    if (numeroPar % 2 === 0) {
      arraySohPares.push (numeroPar)
    }
  }
  return arraySohPares
}

// EXERCÍCIO 04
function retornaMaiorNumero(array) {
  let maiorNum = 0
  for (let numero of array) {
    if (numero > maiorNum) {
      maiorNum = numero
    }
  }
  return maiorNum

}

// EXERCÍCIO 05
function retornaQuantidadeElementos(array) {
  return array.length
}

// EXERCÍCIO 06
function retornaExpressoesBooleanas() {
  const booleano1 = true
  const booleano2 = false
  const booleano3 = !booleano2 //true
  const booleano4 = !booleano3 //false

  answerA = booleano1 && booleano2 && !booleano4;
  answerB = (booleano1 && booleano2) || !booleano3;
  answerC = (booleano2 || booleano3) && (booleano4 || booleano1);
  answerD = !(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3);
  answerE = !(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3);
  
  return Array.of(answerA,answerB,answerC,answerD,answerE)
}

// EXERCÍCIO 07
function retornaNNumerosPares(n) {
  let arrayN = []
  for(let i=0; i < n*2; i++){
    if (i % 2 === 0) {
      arrayN.push(i)
    }
  }
  return arrayN
}

// EXERCÍCIO 08
function checaTriangulo(a, b, c) {
  if (a === b && b === c) {
    return 'Equilátero'
  }
  else if (a === b && b != c) {
    return 'Isósceles'
  }
  else if (a != b && b != c) {return 'Escaleno'}
}

// EXERCÍCIO 09
function comparaDoisNumeros(num1, num2) {
  let X
  let Y
  let Z
  if (num1 > num2 && num1 % num2 ) {
    X = num1;
    Y = false;
    Z = num1 - num2;
  }
  else if (num1 < num2 && num2 % num1 === 0) {
    X = num2;
    Y = true;
    Z = num2 - num1;
  }
  else if (num1 === num2) {
    X = num2;
    Y = true;
    Z = num2 - num1;
  }

  comparacaoNumeros = {
      maiorNumero: X,
      maiorDivisivelPorMenor: Y,
      diferenca: Z
  }
    return comparacaoNumeros
}

// EXERCÍCIO 10
function segundoMaiorEMenor(array) { 
/*      var ordenaArray = array.sort(function (a,b) {
                                          if (a>b) return 1;
                                          if (a<b) return -1;
                                          return 0});   //// NÃO USAR SORT, USAR BUBBLE SORT */
 
let bubbleSort = (array) => {
    let comprimento = array.length;
    for (let i = 0; i < comprimento; i++) {
        for (let j = 0; j < comprimento; j++) {
            if (array[j] > array[j + 1]) {
                let tmp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = tmp;
            }
        }
    }
    return array;
};
bubbleSort(array)    

let segundoMaiorNum = array[array.length-2] ///BUSCA NA ORDEM CRESCENTE O PENÚLTIMO NÚMERO (SEGUNDO MAIOR)
let segundoMenorNum = array.reverse()[array.length-2] ///BUSCA NA ORDEM DECRESCENTE (reverse) O PENÚLTIMO NÚMERO (SEGUNDO MENOR)
 
return Array.of(segundoMaiorNum,segundoMenorNum)
} 
 
// EXERCÍCIO 11
function ordenaArray(array) {
  let comprimento = array.length;
    for (let i = 0; i < comprimento; i++) {
        for (let j = 0; j < comprimento; j++) {
            if (array[j] > array[j + 1]) {
                let tmp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = tmp;
            }
        }
    }
    return array;
}

// EXERCÍCIO 12
function filmeFavorito() {
  const filmeFav = {
    nome: "O Diabo Veste Prada",
    ano: 2006,
    diretor: "David Frankel",
    atores: ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"]
  }
  return filmeFav
}

// EXERCÍCIO 13
function imprimeChamada() {
  const filmeFav = {
    nome: "O Diabo Veste Prada",
    ano: 2006,
    diretor: "David Frankel",
    atores: ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"]
  }
  return `Venha assistir ao filme ${filmeFav.nome}, de ${filmeFav.ano}, dirigido por ${filmeFav.diretor} e estrelado por ${filmeFav.atores[0]}, ${filmeFav.atores[1]}, ${filmeFav.atores[2]}, ${filmeFav.atores[3]}.`
}

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {
  const retangulo = {
    largura: lado1,
    altura: lado2,
    perimetro: (2 * (lado1 + lado2)),
    area: (lado1 * lado2)
  }
  return retangulo;
}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {
  for(let nome of Object.keys(pessoa)) {
    const novoUsuario = {
      ...pessoa,
      nome: 'ANÔNIMO',
    }
    return novoUsuario;
  }
}
// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {
  const maioresIdade = arrayDePessoas.filter((pessoa, indice, array) => {
    return pessoa.idade >= 18
  })
  return maioresIdade
}
// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {
  const menoresIdade = arrayDePessoas.filter((pessoa, indice, array) => {
    return pessoa.idade < 18
  })
  return menoresIdade
}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {
  let arrayVezes2 = []
  for(let numero of array) {
    arrayVezes2.push(numero*2)
  }
    return arrayVezes2
}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {
  let arrayVezes2 = []
  for(let numero of array) {
    arrayVezes2.push((numero*2).toString())
  }
    return arrayVezes2
}

// EXERCÍCIO 17C
function verificaParidade(array) {
  let arrayParidade = []
  for(let numero of array) {
    if (numero % 2 === 0) {
      arrayParidade.push(`${numero} é par`)
    } else if (numero % 2 === 1){
      arrayParidade.push(`${numero} é ímpar`)
    }
  }
 return arrayParidade
}

// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {
 let arrayPessoasAutorizadas  = []
  for(let visitante of pessoas) {
    if ((visitante.altura >= 1.5) && (visitante.idade > 14 && visitante.idade < 60)) {
      arrayPessoasAutorizadas .push(visitante)
    }
  }
  return arrayPessoasAutorizadas 
}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {
  let arrayPessoasNaoAutorizadas  = []
  for(let visitante of pessoas) {
    if (visitante.altura < 1.5) {
      arrayPessoasNaoAutorizadas.push(visitante)
    } else if (visitante.idade <= 14 || visitante.idade >= 60) {
      arrayPessoasNaoAutorizadas.push(visitante)
    }
  }
  return arrayPessoasNaoAutorizadas 
}
 
// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {
  /* const ordenarAlfabetica = consultasNome.filter((ordemAlfabetica, indice, array) => {
     ordemAlfabetica = consultasNome.nome////.toString();
    for (let i = 0; i < ordemAlfabetica; i++) {
        for (let j = 0; j < ordemAlfabetica; j++) {
            if (ordemAlfabetica[j] > ordemAlfabetica[j + 1]) {
                let tmp = ordemAlfabetica[j];
                ordemAlfabetica[j] = ordemAlfabetica[j + 1];
                ordemAlfabetica[j + 1] = tmp;
            }
        }
    }
    console.log(consultasNome)
    return consultasNome; 

    ordemAlfabetica = Array.of(consultasNome.nome)
    for (j = 0; j < ordemAlfabetica - 1; j++);
        {
            for (i = j + 1; i < ordemAlfabetica; i++) 
            {
                if (ordemAlfabetica[j].compareTo(ordemAlfabetica[i]) > 0)
                {
                    temp = ordemAlfabetica[j];
                    ordemAlfabetica[j] = ordemAlfabetica[i];
                    ordemAlfabetica[i] = temp;
                }
            }
        }
        console.log(consultasNome)
        return consultasNome; */
}

// EXERCÍCIO 19B
 function ordenaPorData(consultasData) {
  /* const ordenarPorData = consultasData.filter((ordemData, indice, array) => {
   let ordemData = consultasData.dataDaConsulta;
    for (let i = 0; i < ordemData; i++) {
        for (let j = 0; j < ordemData; j++) {
            if (ordemData[j] > ordemData[j + 1]) {
                let tmp = ordemData[j];
                ordemData[j] = ordemData[j + 1];
                ordemData[j + 1] = tmp;
            }
        }
    }
    ////console.log()
    return consultasData; */
} 

// EXERCÍCIO 20
function calculaSaldo(contas) {

}
