import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JogadorHeroiModel } from '../models/JogadorHeroiModel';
import { HttpHeaders, HttpParams, HttpClient } from '@angular/common/http';
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
export class HeroiJogadorService {

    constructor(private http: HttpClient) { }

    url = 'http://localhost:8080/herois';

    getHerois(page: number, size: number, sortParam: String, sortType: String,
        nomeFilter: String, classeFilter: String, movFilter: String, id: number): Observable<JogadorHeroiModel> {

        httpOptions.params = httpOptions.params
            .set('page', page.toString())
            .set('pageSize', size.toString())
            .set('sortParam', sortParam.toString())
            .set('sortType', sortType.toString())
            .set('nomeFilter', nomeFilter.toString())
            .set('classeFilter', classeFilter.toString())
            .set('movFilter', movFilter.toString())

        return this.http.get<JogadorHeroiModel>(this.url + '/' + id, httpOptions);
    }

    getJogos(id: number): Observable<Jogo[]> {
        return this.http.get<Jogo[]>(this.url + '-jogos/' + id);
    }
}
