import React from "react";
import PerguntasAbertas from "./PerguntasAbertas";

class Etapa2 extends React.Component {
  
  render() {
    return (
        <div>
        <h3>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h3>
        <PerguntasAbertas pergunta={"5. Qual curso?"} />
        <PerguntasAbertas pergunta={"6. Qual a unidade de ensino?"} />
      </div>
    );
  }
}

export default Etapa2;