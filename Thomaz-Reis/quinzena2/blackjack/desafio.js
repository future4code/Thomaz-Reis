////
    let vitoria = Number(21);
    let maoUsuario = []
    let maoComputador = []
 
    console.log("Bem vindo ao jogo de Blackjack!");

    
 
    function jogoBlackJack() {
    if(confirm("Quer iniciar uma nova rodada?")) {
       const carta1Usuario = comprarCarta(); 
       const carta2Usuario = comprarCarta(); 
       const carta1Computador = comprarCarta(); 
       const carta2Computador = comprarCarta(); 
     
       let pontuacaoUsuario = (carta1Usuario.valor + carta2Usuario.valor)
       let pontuacaoComputador = (carta1Computador.valor + carta2Computador.valor)
       let cartasUsuario = (carta1Usuario.texto.toString() + carta2Usuario.texto.toString())
       let cartasComputador = (carta1Computador.texto.toString() + carta2Computador.texto.toString())
      
      if ((cartasUsuario.includes ('A','A')) || (cartasComputador.includes ('A','A'))) {
         alert("Dois Ás na mão, jogo será reiniciado")
           maoUsuario.pop()
           maoUsuario.pop()
           maoComputador.pop()
           maoComputador.pop()
           jogoBlackJack()
        }
      
      else {
       
         
       maoUsuario.push(carta1Usuario.texto,carta2Usuario.texto)
       
   
       maoComputador.push(carta1Computador.texto,carta2Computador.texto)
       
       
       var resultado = confirm
       (`Suas cartas são ${maoUsuario.toString()}. A carta revelada do computador é ${carta1Computador.texto} \n Deseja comprar mais uma carta?`)
         if (resultado == true) {
         const carta3Usuario = comprarCarta();
         maoUsuario.push(carta3Usuario.texto);
         pontuacaoUsuario = (pontuacaoUsuario + carta3Usuario.valor)
         {
         if (pontuacaoUsuario < vitoria) {
            var resultado = confirm(`Suas cartas são ${maoUsuario.toString()}. A carta revelada do computador é ${carta1Computador.texto} \n Deseja comprar mais uma carta?`)
         if (resultado == true){
            const carta4Usuario = comprarCarta();
            maoUsuario.push(carta4Usuario.texto);
            pontuacaoUsuario = (pontuacaoUsuario + carta4Usuario.valor)
            {
               if (pontuacaoUsuario < vitoria) {
                  var resultado = confirm(`Suas cartas são ${maoUsuario.toString()}. A carta revelada do computador é ${carta1Computador.texto} \n Deseja comprar mais uma carta?`)
                  if (resultado == true){
                     const carta5Usuario = comprarCarta();
                     maoUsuario.push(carta5Usuario.texto);
                     pontuacaoUsuario = (pontuacaoUsuario + carta5Usuario.valor)
                        }
                     }
                  }
               }
            }
         }
      }
      
      
      console.log("Usuário - cartas:", maoUsuario.toString(),"- pontuação", pontuacaoUsuario)
      console.log("Computador - cartas:", maoComputador.toString(),"- pontuação", pontuacaoComputador)

       if (pontuacaoUsuario == vitoria) {
          console.log("O usuário ganhou!")
       }
       else if (pontuacaoComputador == vitoria) {
          console.log("O computador ganhou!")
       }
       else if (pontuacaoUsuario > pontuacaoComputador && pontuacaoUsuario < vitoria ) {
          console.log("O usuário ganhou!")
       }
       else if (pontuacaoComputador > pontuacaoUsuario && pontuacaoComputador < vitoria) {
          console.log("O computador ganhou!")
       }
       else if (pontuacaoUsuario > pontuacaoComputador && pontuacaoComputador < vitoria ) {
          console.log("O computador ganhou!")
       }
       else if (pontuacaoComputador > pontuacaoUsuario && pontuacaoUsuario < vitoria) {
          console.log("O usuário ganhou!")
       }
       else if (pontuacaoUsuario == pontuacaoComputador) {
          console.log("Empate!")
       }
       else {
          console.log("Não houve ganhadores!")
       }
 
       return carta1Usuario, carta2Usuario, carta1Computador, carta2Computador
      } 
    }
    else {
      alert ("Você decidiu parar");
    } 
 }
 jogoBlackJack() 
 