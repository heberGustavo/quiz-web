import { useEffect, useState } from "react";
import QuestaoModel from "../../model/questao";
import RespostaModel from "../../model/resposta";
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

const BASE_URL = "http://localhost:3000/api";

export default function Home() {
  const [idsQuestoes, setIdsQuestoes] = useState<number[]>([]);
  const [questao, setQuestao] = useState<QuestaoModel>(questaoMock);

  useEffect(() => {
    carregarIdsQuestoes();
  }, [])

  useEffect(() => {
    if(idsQuestoes.length > 0)
      carregarQuestao(idsQuestoes[0]);
  }, [idsQuestoes])

  async function carregarIdsQuestoes() {
    const resp = await fetch(`${BASE_URL}/questionario`);
    const ids = await resp.json();
    setIdsQuestoes(ids);
  }

  async function carregarQuestao(idQuestao: number) {
    const resp = await fetch(`${BASE_URL}/questoes/${idQuestao}`);
    const json = await resp.json();
    const novaQuestao = QuestaoModel.criarUsandoObjeto(json);
    setQuestao(novaQuestao);
  }

  function questaoRespondida(questao: QuestaoModel){

  }

  function irPraProximoPasso(){

  }

  return (
    <Questionario 
        questao={questao} 
        ultima={true}
        questaoRespondida={questaoRespondida}
        irPraProximoPasso={irPraProximoPasso} />
  );
}
