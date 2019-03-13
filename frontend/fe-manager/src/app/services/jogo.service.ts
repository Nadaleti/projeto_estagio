import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JogoModel } from '../models/jogoModel';

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

    getJogos(page: number, size: number) : Observable<JogoModel> {
        httpOptions.params = httpOptions.params
            .set('page', page.toString())
            .set('pageSize', size.toString())
            .set('observe', 'response');
        
        return this.http.get<JogoModel>(this.jogoUrl, httpOptions);
    }

}
