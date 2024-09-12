import { useEffect, useState } from "react";
import QuestaoModel from "../../model/questao";
import Questionario from "../../components/Questionario";
import { useRouter } from "next/router";

const BASE_URL = "http://localhost:3000/api";

export default function Home() {
  const router = useRouter();

  const [idsQuestoes, setIdsQuestoes] = useState<number[]>([]);
  const [questao, setQuestao] = useState<QuestaoModel>();
  const [respostasCertas, setRespostasCertas] = useState<number>(0);

  useEffect(() => {
    carregarIdsQuestoes();
  }, [])

  useEffect(() => {
    if (idsQuestoes.length > 0)
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

  function questaoRespondida(questaoRespondida: QuestaoModel) {
    setQuestao(questaoRespondida);

    const acertou = questaoRespondida.acertou;
    setRespostasCertas(respostasCertas + (acertou ? 1 : 0));
  }

  function idProximaQuestao() {
    const proximoIndice = idsQuestoes.indexOf(questao.id) + 1;
    return idsQuestoes[proximoIndice];
  }

  function irPraProximoPasso() {
    const proximoId = idProximaQuestao();
    proximoId ? irPraProximaQuestao(proximoId) : finalizar();
  }

  function irPraProximaQuestao(proximoId: number) {
    carregarQuestao(proximoId);
  }

  function finalizar() {
    router.push({
      pathname: "/resultado",
      query: {
        total: idsQuestoes.length,
        certas: respostasCertas
      }
    });
  }

  return questao ? (
    <Questionario
      questao={questao}
      ultima={idProximaQuestao() === undefined}
      questaoRespondida={questaoRespondida}
      irPraProximoPasso={irPraProximoPasso} />
  ) : false
}
