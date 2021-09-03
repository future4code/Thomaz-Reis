```
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  arrayDeNumeros
  numeroEscolhido
  var count = 0;
            for (let i = 0; i < arrayDeNumeros.length+1; i++  ){
               if (arrayDeNumeros[i] == numeroEscolhido) {count++}}
               if (count > 0) {return `O número ${numeroEscolhido} aparece ${count}x`}
               else {return "Número não encontrado"}
}
```