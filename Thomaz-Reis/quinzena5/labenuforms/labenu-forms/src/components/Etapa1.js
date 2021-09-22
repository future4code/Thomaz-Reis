import React from "react";
import PerguntasAbertas from "./PerguntasAbertas";
import PerguntasEscolhas from "./PerguntasEscolhas";

class Etapa1 extends React.Component {
  state = {
    escolaridade: ""
  };

  render() {
    return (
      <div>
        <h1>ETAPA 1 - DADOS GERAIS</h1>
        <PerguntasAbertas pergunta={"1. Qual o seu nome?"} />
        <PerguntasAbertas pergunta={"2. Qual sua idade?"} />
        <PerguntasAbertas pergunta={"3. Qual seu email?"} />
        <PerguntasEscolhas
          pergunta={"4. Qual a sua escolaridade?"}
          opcoes={[
            "Ensino médio incompleto",
            "Ensino médio completo",
            "Ensino superior incompleto",
            "Ensino superior completo"
          ]}
        />
      </div>
      
    );
  }
}

export default Etapa1;