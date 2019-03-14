import { CollectionViewer, DataSource } from "@angular/cdk/collections";
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { JogadorService } from 'src/app/services/jogador.service';
import { Jogador } from 'src/app/models/jogador';

export class JogadorDataSource extends DataSource<Jogador> {
    private jogadorSubject = new BehaviorSubject<Jogador[]>([]);
    private total = new BehaviorSubject<number>(0);

    public total$ = this.total.asObservable();

    constructor(private jogadorService: JogadorService){
        super();
    }

    connect(collectionViewer: CollectionViewer): Observable<Jogador[]> {
        return this.jogadorSubject.asObservable();
    }

    disconnect(collectionViewer: CollectionViewer): void {
        this.jogadorSubject.complete();
    }

    loadJogadores(page: number, size: number, filter: string) {
        this.jogadorService.getJogadores(page, size, filter)
            .pipe(
                tap(jogadorModel => this.jogadorSubject.next(jogadorModel.jogadores)),
                tap(jogadorModel => this.total.next(jogadorModel.total))
            )
            .subscribe();
    }

    updateJogador(jogador: Jogador, page: number, size: number, filter: string) {
        this.jogadorService.updateJogador(jogador)
            .subscribe(_ => this.loadJogadores(page, size, filter));
    }
    
    deleteJogo(id: number, page: number, size: number, term: string) {
        this.jogadorService.deleteJogador(id)
            .subscribe(_ => {
                if (page >= 0)
                    this.loadJogadores(page, size, term)
            });
    }
}