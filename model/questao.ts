/* eslint-disable prefer-const */
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

    public get id(): number {
        return this.#id;
    }

    public get enunciado(): string {
        return this.#enunciado;
    }

    public get respostas(): any[] {
        return this.#respostas;
    }

    public get acertou(): boolean {
        return this.#acertou;
    }

    public get respondida(): boolean {
        for (let resposta of this.#respostas) {
            if (resposta.revelada) return true;
        }

        return false;
    }
}
