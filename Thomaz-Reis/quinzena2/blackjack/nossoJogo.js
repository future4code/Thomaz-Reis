/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
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

      maoUsuario.push(carta1Usuario.texto,carta2Usuario.texto)
      console.log("Usuário - cartas:", maoUsuario.toString(),"- pontuação", pontuacaoUsuario)
  
      maoComputador.push(carta1Computador.texto,carta2Computador.texto)
      console.log("Computador - cartas:", maoComputador.toString(),"- pontuação", pontuacaoComputador)

      if (pontuacaoUsuario == vitoria) {
         console.log("O usuário ganhou!")
      }
      else if (pontuacaoComputador == vitoria) {
         console.log("O computador ganhou!")
      }
      else if (pontuacaoUsuario > pontuacaoComputador) {
         console.log("O usuário ganhou!")
      }
      else if (pontuacaoComputador > pontuacaoUsuario) {
         console.log("O computador ganhou!")
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
jogoBlackJack() 
