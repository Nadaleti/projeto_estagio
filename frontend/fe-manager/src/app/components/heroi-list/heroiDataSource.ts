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
        this.total.complete();
    }

    loadHerois(page: number, size: number) {
        this.heroiService.getHerois(page, size)
            .pipe(
                tap(heroiModel => this.heroiSubject.next(heroiModel.herois)),
                tap(heroiModel => this.total.next(heroiModel.total))
            )
            .subscribe();
    }
}