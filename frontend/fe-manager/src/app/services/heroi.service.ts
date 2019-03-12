import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HeroiModel } from '../models/heroiModel';

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

  getHerois(page: number, size: number, sortParam: String, sortType: String) : Observable<HeroiModel> {
      httpOptions.params = httpOptions.params
          .set('page', page.toString())
          .set('pageSize', size.toString())
          .set('sortParam', sortParam.toString())
          .set('sortType', sortType.toString())

      return this.http.get<HeroiModel>(this.heroiUrl, httpOptions);
  
  }

}
