/* eslint-disable import/no-anonymous-default-export */

import { NextApiRequest, NextApiResponse } from "next";
import questoes from "../bancoDeQuestoes";

export default (req: NextApiRequest, res: NextApiResponse) => {
    if(req.method === "GET"){
        const query = req.query;
        const idSelecionado = +`${query.id}`;
    
        const unicaQuestaoSelecionada = questoes.filter(quest => quest.id === idSelecionado);
    
        if(unicaQuestaoSelecionada.length === 1) {
            const questaoSelecionada = unicaQuestaoSelecionada[0].embaralharRespostas();
    
            res.status(200).json(questaoSelecionada.paraObjeto());
        }
        else{
            res.status(204).end();
        }
    }
    else{
        res.status(204).end();
    }
}