/* eslint-disable prefer-const */
import { embaralhar } from "../functions/embaralhar";
import RespostaModel from "./resposta";

/* eslint-disable @typescript-eslint/no-explicit-any */
export default class QuestaoModel {
    #id: number;
    #enunciado: string;
    #respostas: RespostaModel[];
    #acertou: boolean;

    constructor(
        id: number,
        enunciado: string,
        respostas: any[],
        acertou = false
    ) {
        this.#id = id;
        this.#enunciado = enunciado;
        this.#respostas = respostas;
        this.#acertou = acertou;
    }

    get id(): number {
        return this.#id;
    }

    get enunciado(): string {
        return this.#enunciado;
    }

    get respostas(): any[] {
        return this.#respostas;
    }

    get acertou(): boolean {
        return this.#acertou;
    }

    get respondida(): boolean {
        for (let resposta of this.#respostas) {
            if (resposta.revelada) return true;
        }

        return false;
    }
    
    responderCom(indice: number) : QuestaoModel{
        const acertou = this.#respostas[indice]?.certa;
        const respostas = this.#respostas.map((resposta, i) => {
            const respostaSelecionada = indice == i;
            const deveRevelar = respostaSelecionada || resposta.certa;
            return deveRevelar ? resposta.revelar : resposta
        });

        return new QuestaoModel(this.#id, this.#enunciado, respostas, acertou);
    }

    embaralharRespostas() : QuestaoModel {
        let respostasEmbaralhadas = embaralhar(this.#respostas);
        return new QuestaoModel(this.#id, this.#enunciado, respostasEmbaralhadas, this.#acertou);
    }

    toObject() {
        return {
            id: this.#id,
            enunciado: this.#enunciado,
            respondida: this.respondida,
            acertou: this.#acertou,
            respostas: this.#respostas.map(resp => resp.toObject()),
        }
    }
}
