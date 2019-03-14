import { Injectable } from '@angular/core';
import { Jogador } from '../models/jogador';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { heroiJogador } from '../models/heroiJogador';

@Injectable({
    providedIn: 'root'
})
export class SummonService {

    constructor(private http: HttpClient) { }

    url: string = "http://localhost:8080/summon";

    getHeroiJogador(jogador: Jogador): Observable<heroiJogador> {
        let heroi = new heroiJogador(null, null, jogador, 0, 1);

        return this.http.post<heroiJogador>(this.url, heroi);
    }

    getAllJogadores(): Observable<Jogador[]> {
        return this.http.get<Jogador[]>(this.url+'/jogadores');
    }
}
