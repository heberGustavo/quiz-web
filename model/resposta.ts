export default class RespostaModel {
    #valor: string;
    #certa: boolean;
    #revelada: boolean;

    constructor(valor: string, certa: boolean, revelada = false) {
        this.#valor = valor;
        this.#certa = certa;
        this.#revelada = revelada;
    }

    static certa(valor: string){
        return new RespostaModel(valor, true);
    }

    static errada(valor: string){
        return new RespostaModel(valor, false);
    }

    public get valor(): string {
        return this.#valor;
    }

    public get certa(): boolean {
        return this.#certa;
    }

    public get revelada(): boolean {
        return this.#revelada;
    }

    toObject(){
        return {
            valor: this.#valor,
            certa: this.#certa,
            revelada: this.#revelada,
        }
    }
}
