/* eslint-disable import/no-anonymous-default-export */

import questoes from "../bancoDeQuestoes";

export default (req, res) => {
    console.log(questoes[0].id)
    res.status(200).json(questoes[0].toObject())
}