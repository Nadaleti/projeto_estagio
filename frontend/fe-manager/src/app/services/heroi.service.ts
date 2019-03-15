import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HeroiModel } from '../models/heroiModel';
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

export class HeroiService {

  constructor(private http: HttpClient) { }

  heroiUrl = 'http://localhost:8080/herois';

  getHerois(page: number, size: number, sortParam: String, sortType: String, 
            nomeFilter: String, classeFilter: String, movFilter: String) : Observable<HeroiModel> {

      httpOptions.params = httpOptions.params
          .set('page', page.toString())
          .set('pageSize', size.toString())
          .set('sortParam', sortParam.toString())
          .set('sortType', sortType.toString())
          .set('nomeFilter', nomeFilter.toString())
          .set('classeFilter', classeFilter.toString())
          .set('movFilter', movFilter.toString())

      return this.http.get<HeroiModel>(this.heroiUrl, httpOptions);
  
  }

  getJogos(id: number): Observable<Jogo[]>{
    return this.http.get<Jogo[]>(this.heroiUrl + '-jogos/' + id);
  }

  deleteJogo(id: number): Observable<Jogo> {
    return this.http.delete<Jogo>(this.heroiUrl+'/'+id);
  }

}
