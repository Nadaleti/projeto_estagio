export class Jogador {
    id: number;
    nome: string;
    sexo: string;
    max_herois: number;
    num_herois: number;

    constructor(id: number, nome: string, sexo: string, max_herois: number, num_herois: number) {
        this.id = id;
        this.nome = nome;
        this.sexo = sexo;
        this. max_herois = max_herois;
        this.num_herois = num_herois;
    }
}