import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { JogadorHeroiModel } from 'src/app/models/JogadorHeroiModel';
import { ViewModalHeroiComponent } from '../view-modal-heroi/view-modal-heroi.component';
import { MatDialogRef, MatPaginator, MatSort, MatSelect, MatDialog } from '@angular/material';
import { HeroiJogadorService } from 'src/app/services/heroi-jogador.service';
import { merge, fromEvent } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HeroiJogadorDataSource } from './heroiJogadorDataSource';

@Component({
    selector: 'app-heroi-jogador-list',
    templateUrl: './heroi-jogador-list.component.html',
    styleUrls: ['./heroi-jogador-list.component.scss']
})
export class HeroiJogadorListComponent implements OnInit {
    @Input() id: number;
    heroiJogadorDatasource: HeroiJogadorDataSource;

    columnsOrder = ['nome', 'alcunha', 'classe', 'movimentacao', 'edit', 'delete'];
    totalOfItems: number;
    dialogRef: MatDialogRef<ViewModalHeroiComponent>;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
    @ViewChild('inputNome') inputNome: ElementRef;
    @ViewChild('inputClasse') inputClasse: MatSelect;
    @ViewChild('inputMov') inputMov: MatSelect;
    heroiDatasource: any;

    constructor(private heroiJogadorService: HeroiJogadorService, private dialog: MatDialog) { }

    ngOnInit() {
        this.heroiJogadorDatasource = new HeroiJogadorDataSource(this.heroiJogadorService);
        this.heroiJogadorDatasource.loadHerois(0, 10, 'nome', 'asc', "", "", "", this.id);
    }

    ngAfterViewInit() {
        merge(fromEvent(this.inputNome.nativeElement, 'keyup'), this.inputClasse.selectionChange, this.inputMov.selectionChange)
            .pipe(
                tap(() => {
                    this.paginator.pageIndex = 0;
                    this.heroiJogadorDatasource.loadHerois(this.paginator.pageIndex, this.paginator.pageSize,
                        this.sort.active, this.sort.direction.toString(), this.inputNome.nativeElement.value,
                        (!this.inputClasse.value) ? "" : this.inputClasse.value,
                        (!this.inputMov.value) ? "" : this.inputMov.value, this.id);
                })
            )
            .subscribe();

        this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

        merge(this.sort.sortChange, this.paginator.page)
            .pipe(
                tap(() => this.heroiDatasource.loadHerois(this.paginator.pageIndex, this.paginator.pageSize,
                    this.sort.active, this.sort.direction.toString(), this.inputNome.nativeElement.value,
                    (!this.inputClasse.value) ? "" : this.inputClasse.value,
                    (!this.inputMov.value) ? "" : this.inputMov.value)
                )
            )
            .subscribe();
    }

    zeroItems(): boolean {
        let isZero: boolean;
        this.heroiDatasource.total$.subscribe(total => { isZero = total === 0 });
        return isZero;
    }

    // openHeroDialog(heroi: Heroi, jogos: Jogo[]): MatDialogRef<ViewModalHeroiComponent> {
    //     const config = new MatDialogConfig();
    //     config.height = '510px';
    //     config.width = '700px';
    //     config.data = {
    //         heroi: heroi,
    //         jogos: jogos
    //     };

    //     return this.dialog.open(ViewModalHeroiComponent, config);
    // }

    // viewHero(row: Heroi) {
    //     this.heroiService.getJogos(row.id).subscribe(jogos => {
    //         this.dialogRef = this.openHeroDialog(row, jogos);
    //     })
    // }

    delete(heroi) {
        console.log(heroi.id)
    }
}
