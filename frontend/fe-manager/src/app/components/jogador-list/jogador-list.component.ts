import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material';
import { JogadorService } from 'src/app/services/jogador.service';
import { JogadorDataSource } from './jogadorDataSource';
import { tap } from 'rxjs/operators';
import { Jogador } from 'src/app/models/jogador';
import { JogadorModalComponent } from '../jogador-modal/jogador-modal.component';
import { DeleteModalComponent } from '../delete-modal/delete-modal.component';

@Component({
    selector: 'app-jogador-list',
    templateUrl: './jogador-list.component.html',
    styleUrls: ['./jogador-list.component.scss']
})
export class JogadorListComponent implements OnInit {
    columnsOrder = ['nome', 'sexo', 'numHerois', 'maxHerois', 'edit', 'delete'];
    private term: string = '';

    jogadorDataSource: JogadorDataSource;

    @ViewChild(MatPaginator) paginator: MatPaginator;

    constructor(private jogadorService: JogadorService,
                private dialog: MatDialog) { }

    ngOnInit() {
        this.jogadorDataSource = new JogadorDataSource(this.jogadorService);
        this.jogadorDataSource.loadJogadores(0, 5, this.term);
    }

    ngAfterViewInit() {
        this.paginator.page
            .pipe(
                tap(() => this.jogadorDataSource.loadJogadores(this.paginator.pageIndex, this.paginator.pageSize, this.term))
            )
            .subscribe();
    }

    findByNome(term: string): void {
        this.term = term;
        this.jogadorDataSource.loadJogadores(0, 5, this.term);
    }

    openEditDialog(jogador: Jogador): MatDialogRef<JogadorModalComponent> {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.width = '600px';
        dialogConfig.data = jogador;

        return this.dialog.open(JogadorModalComponent, dialogConfig);
    }

    edit(jogador: Jogador) {
        let dialogRef = this.openEditDialog(jogador);

        dialogRef.afterClosed().subscribe(
            data => {
                if (data) {
                    this.jogadorDataSource.updateJogador(data, this.paginator.pageIndex, this.paginator.pageSize, this.term);
                }
            }
        );
    }

    delete(jogador: Jogador) {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.width = '500px';
        dialogConfig.data = {
            modalType: 'jogador',
            id: jogador.id,
            modalContent: jogador.nome
        }

        let dialogRef = this.dialog.open(DeleteModalComponent, dialogConfig);

        dialogRef.afterClosed().subscribe(
            data => {
                if (data) {
                    if (this.paginator.length % this.paginator.pageSize === 1 && !this.paginator.hasNextPage()) {
                        this.paginator.previousPage();
                        this.jogadorDataSource.deleteJogo(data, -1, this.paginator.pageSize, this.term);
                    } else
                        this.jogadorDataSource.deleteJogo(data, this.paginator.pageIndex, this.paginator.pageSize, this.term);
                }
            }
        );
    }

    zeroItems(): boolean {
        let isZero: boolean;
        this.jogadorDataSource.total$.subscribe(total => { isZero = total === 0 });
        return isZero;
    }

}
