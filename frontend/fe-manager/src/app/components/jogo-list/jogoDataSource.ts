import { CollectionViewer, DataSource } from "@angular/cdk/collections";
import { Jogo } from "../../models/jogo";
import { BehaviorSubject, Observable } from 'rxjs';
import { JogoService } from 'src/app/services/jogo.service';
import { tap } from 'rxjs/operators';

export class JogoDataSource extends DataSource<Jogo> {
    private jogoSubject = new BehaviorSubject<Jogo[]>([]);
    private total = new BehaviorSubject<number>(0);

    public total$ = this.total.asObservable();

    constructor(private jogoService: JogoService){
        super();
    }

    connect(collectionViewer: CollectionViewer): Observable<Jogo[]> {
        return this.jogoSubject.asObservable();
    }

    disconnect(collectionViewer: CollectionViewer): void {
        this.jogoSubject.complete();
    }

    loadJogos(page: number, size: number) {
        this.jogoService.getJogos(page, size)
            .pipe(
                tap(jogoModel => this.jogoSubject.next(jogoModel.jogos)),
                tap(jogoModel => this.total.next(jogoModel.total))
            )
            .subscribe();
    }
}