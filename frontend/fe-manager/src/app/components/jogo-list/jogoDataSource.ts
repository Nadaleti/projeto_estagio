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

    loadJogos(page: number, size: number, filter: string) {
        this.jogoService.getJogos(page, size, filter)
            .pipe(
                tap(jogoModel => this.jogoSubject.next(jogoModel.jogos)),
                tap(jogoModel => this.total.next(jogoModel.total))
            )
            .subscribe();
    }

    updateJogo(jogo: Jogo, page: number, pageSize: number, term: string) {
        this.jogoService.updateJogo(jogo)
            .subscribe(_ => this.loadJogos(page, pageSize, term));
    }

    createJogo(jogo: Jogo) {
        this.jogoService.createJogo(jogo)
            .subscribe();
    }
}