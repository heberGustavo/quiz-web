import Questao from "../../components/Questao";
import QuestaoModel from "../../model/questao";
import RespostaModel from "../../model/resposta";

export default function Home() {
  const questaoTeste = new QuestaoModel(
    212,
    "Qual montanha se localiza entre a fronteira do Tibet com o Nepal?",
    [
      RespostaModel.errada("Monte Branco"),
      RespostaModel.errada("Monte Fuji"),
      RespostaModel.errada("Monte Carlo"),
      RespostaModel.certa("Monte Everest"),
    ]
  );
  
  return (
    <div>
      <Questao valor={questaoTeste} />
    </div>
  );
}
