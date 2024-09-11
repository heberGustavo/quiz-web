import { useState } from "react";
import Questao from "../../components/Questao";
import QuestaoModel from "../../model/questao";
import RespostaModel from "../../model/resposta";

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

  function respostaFornecida(indice: number) {
    setQuestao(questao.responderCom(indice))
  }

  function tempoEsgotado() {
    if (questao.naoRespondida)
      setQuestao(questao.responderCom(-1))
  }

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh"
    }}>
      <Questao valor={questao} tempoPraResposta={2} respostaFornecida={respostaFornecida} tempoEsgotado={tempoEsgotado} />
    </div>
  );
}
