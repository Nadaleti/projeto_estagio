import { DataSource } from '@angular/cdk/table';
import { heroiJogador } from 'src/app/models/heroiJogador';
import { JogadorHeroiModel } from 'src/app/models/JogadorHeroiModel';
import { BehaviorSubject, Observable } from 'rxjs';
import { HeroiJogadorService } from 'src/app/services/heroi-jogador.service';
import { CollectionViewer } from '@angular/cdk/collections';
import { tap } from 'rxjs/operators';

export class HeroiJogadorDataSource extends DataSource<heroiJogador> {
    private heroiSubject = new BehaviorSubject<heroiJogador[]>([]);
    private total = new BehaviorSubject<number>(0);

    public total$ = this.total.asObservable();

    constructor(private heroiJogadorService: HeroiJogadorService){
        super();
    }

    connect(collectionViewer: CollectionViewer): Observable<heroiJogador[]> {
        return this.heroiSubject.asObservable();
    }

    disconnect(collectionViewer: CollectionViewer): void {
        this.heroiSubject.complete();
    }

    loadHerois(page: number, size: number, sortParam: String, sortType: String,
        nomeFilter: String, classeFilter: String, movFilter: String, id: number) {
        this.heroiJogadorService.getHerois(page, size, sortParam, sortType, nomeFilter, classeFilter, movFilter, id)
            .pipe(
                tap(jogadorHeroiModel => {this.heroiSubject.next(jogadorHeroiModel.herois); console.log(jogadorHeroiModel)}),
                tap(heroiModel => this.total.next(heroiModel.total)),
            )
            .subscribe();
    }
}