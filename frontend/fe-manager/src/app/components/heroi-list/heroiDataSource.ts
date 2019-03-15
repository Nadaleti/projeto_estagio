import { CollectionViewer, DataSource } from "@angular/cdk/collections";
import { Heroi } from "../../models/heroi";
import { BehaviorSubject, Observable } from 'rxjs';
import { HeroiService } from 'src/app/services/heroi.service';
import { tap } from 'rxjs/operators';

export class HeroiDatasource extends DataSource<Heroi> {
    private heroiSubject = new BehaviorSubject<Heroi[]>([]);
    private total = new BehaviorSubject<number>(0);

    public total$ = this.total.asObservable();

    constructor(private heroiService: HeroiService){
        super();
    }

    connect(collectionViewer: CollectionViewer): Observable<Heroi[]> {
        return this.heroiSubject.asObservable();
    }

    disconnect(collectionViewer: CollectionViewer): void {
        this.heroiSubject.complete();
    }

    loadHerois(page: number, size: number, sortParam: String, sortType: String,
        nomeFilter: String, classeFilter: String, movFilter: String) {
        this.heroiService.getHerois(page, size, sortParam, sortType, nomeFilter, classeFilter, movFilter)
            .pipe(
                tap(heroiModel => this.heroiSubject.next(heroiModel.herois)),
                tap(heroiModel => this.total.next(heroiModel.total)),
            )
            .subscribe();
    }

    createHeroi(heroi: Heroi) {
        this.heroiService.createJogo(heroi)
            .subscribe();
    }

    updateHeroi(heroi: Heroi, page: number, size: number, sortParam: String, sortType: String,
        nomeFilter: String, classeFilter: String, movFilter: String) {
        this.heroiService.updateHeroi(heroi)
            .subscribe(_ => this.loadHerois(page, size, sortParam, sortType, nomeFilter, classeFilter, movFilter));
    }

    deleteHeroi(id:number, page: number, size: number, sortParam: String, sortType: String,
        nomeFilter: String, classeFilter: String, movFilter: String) {
        this.heroiService.deleteHeroi(id)
            .subscribe(_ => {
                if (page >= 0)
                    this.loadHerois(page, size, sortParam, sortType, nomeFilter, classeFilter, movFilter)
            });
        
    }
}