import { Heroi } from './heroi';
import { Jogador } from './jogador';

export class heroiJogador {
    id: number;
    heroi: Heroi;
    jogador: Jogador;
    raridade: number;
    level: number;

    constructor(id: number, heroi: Heroi, jogador: Jogador, raridade: number, level: number){
        this.id = id;
        this.heroi = heroi;
        this.jogador = jogador;
        this.raridade = raridade;
        this.level = level;
    }
}