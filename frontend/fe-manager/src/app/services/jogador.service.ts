import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Jogador } from '../models/jogador';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { JogadorModel } from '../models/jogadorModel';
import { JogadorHeroiModel } from '../models/JogadorHeroiModel';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    }),
    params: new HttpParams()
}

@Injectable({
    providedIn: 'root'
})
export class JogadorService {
    jogadorUrl: string = "http://localhost:8080/jogadores";

    constructor(private http: HttpClient) { }

    getJogadores(page: number, size: number, filter: string): Observable<JogadorModel> {
        httpOptions.params = httpOptions.params
            .set('page', page.toString())
            .set('pageSize', size.toString())
            .set('filter', filter);

        return this.http.get<JogadorModel>(this.jogadorUrl, httpOptions);
    }

    getJogador(id: string): Observable<JogadorHeroiModel> {
        httpOptions.params = httpOptions.params.set('id', id);

        return this.http.get<JogadorHeroiModel>(this.jogadorUrl+'/'+id);
    }

    updateJogador(jogador: Jogador) {
        return this.http.put<Jogador>(this.jogadorUrl+'/'+jogador.id, jogador);
    }

    deleteJogador(id: number): Observable<Jogador> {
        return this.http.delete<Jogador>(this.jogadorUrl+'/'+id);
    }
}
