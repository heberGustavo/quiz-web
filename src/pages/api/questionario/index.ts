/* eslint-disable import/no-anonymous-default-export */

import { embaralhar } from "../../../../functions/embaralhar";
import questoes from "../bancoDeQuestoes";

export default (req, res) => {
    const ids = questoes.map(questao => questao.id);
    res.status(200).json(embaralhar(ids));
}