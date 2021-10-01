import React from "react";
import PerguntasAbertas from "./PerguntasAbertas";
import PerguntasEscolhas from "./PerguntasEscolhas";

class Etapa3 extends React.Component {
  
  render() {
    return (
        <div>
        <h3>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h3>
        <PerguntasAbertas
          pergunta={"5. Por que você não terminou um curso de graduação?"}
        />
        <PerguntasEscolhas
          pergunta={"6. Você fez algum curso complementar?"}
          opcoes={["Nenhum", "Curso técnico", "Curso de inglês", "Curso de espanhol", "Curso pré-vestibular"]}
        />
      </div>
    );
  }
}

export default Etapa3;