/* eslint-disable import/no-anonymous-default-export */

import { NextApiRequest, NextApiResponse } from "next";
import { embaralhar } from "../../../../functions/embaralhar";
import questoes from "../bancoDeQuestoes";

export default (req: NextApiRequest, res: NextApiResponse) => {
    const ids = questoes.map(questao => questao.id);
    res.status(200).json(embaralhar(ids));
}