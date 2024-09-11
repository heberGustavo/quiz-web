import { useState } from "react";
import Questao from "../../components/Questao";
import QuestaoModel from "../../model/questao";
import RespostaModel from "../../model/resposta";
import Botao from "../../components/Botao";
import Questionario from "../../components/Questionario";

const questaoMock = new QuestaoModel(
  212,
  "Qual montanha se localiza entre a fronteira do Tibet com o Nepal?",
  [
    RespostaModel.errada("Monte Branco"),
    RespostaModel.errada("Monte Fuji"),
    RespostaModel.errada("Monte Carlo"),
    RespostaModel.certa("Monte Everest"),
  ]
);

export default function Home() {
  const [questao, setQuestao] = useState(questaoMock);

  function questaoRespondida(questao: QuestaoModel){

  }

  function irPraProximoPasso(){

  }

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
      height: "100vh"
    }}>
      <Questionario 
        questao={questao} 
        ultima={true}
        questaoRespondida={questaoRespondida}
        irPraProximoPasso={irPraProximoPasso} />
    </div>
  );
}
