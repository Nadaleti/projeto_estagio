import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JogoModel } from '../models/jogoModel';
import { Jogo } from '../models/jogo';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    }),
    params: new HttpParams()
}

@Injectable({
    providedIn: 'root'
})
export class JogoService {

    constructor(private http: HttpClient) { }

    jogoUrl = 'http://localhost:8080/jogos';

    getJogos(page: number, size: number, filter: string) : Observable<JogoModel> {
        httpOptions.params = httpOptions.params
            .set('page', page.toString())
            .set('pageSize', size.toString())
            .set('filter', filter);
        
        return this.http.get<JogoModel>(this.jogoUrl, httpOptions);
    }

    updateJogo(jogo: Jogo): Observable<Jogo> {
        return this.http.put<Jogo>(this.jogoUrl+'/'+jogo.id, jogo);
    }

    createJogo(jogo: Jogo): Observable<Jogo> {
        return this.http.post<Jogo>(this.jogoUrl, jogo);
    }
}
