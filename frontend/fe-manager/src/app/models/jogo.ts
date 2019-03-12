export class Jogo {
    constructor(id: number, nome: string, ano_lancamento: number, plataforma: string) {
        this.id = id;
        this.nome = nome;
        this.ano_lancamento = ano_lancamento;
        this.plataforma = plataforma;
    }

    id: number;
    nome: string;
    ano_lancamento: number;
    plataforma: string;
}