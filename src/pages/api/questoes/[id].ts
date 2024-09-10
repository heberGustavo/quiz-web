/* eslint-disable import/no-anonymous-default-export */

import questoes from "../bancoDeQuestoes";

export default (req, res) => {
    const query = req.query;
    const idSelecionado = +query.id;

    const unicaQuestaoSelecionada = questoes.filter(quest => quest.id === idSelecionado);

    if(unicaQuestaoSelecionada.length === 1) {
        const questaoSelecionada = unicaQuestaoSelecionada[0].embaralharRespostas();

        res.status(200).json(questaoSelecionada.toObject());
    }
    else{
        res.status(204).send();
    }
}