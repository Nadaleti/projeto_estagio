import { Component, OnInit, ViewChild } from '@angular/core';
import { JogoDataSource } from './jogoDataSource';
import { JogoService } from 'src/app/services/jogo.service';
import { MatPaginator, MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material';
import { tap, distinctUntilChanged, debounce, debounceTime, switchMap } from 'rxjs/operators';
import { JogoModalComponent } from '../jogo-modal/jogo-modal.component';
import { Jogo } from 'src/app/models/jogo';

@Component({
    selector: 'app-jogo-list',
    templateUrl: './jogo-list.component.html',
    styleUrls: ['./jogo-list.component.scss']
})
export class JogoListComponent implements OnInit {
    jogoDataSource: JogoDataSource;
    columnsOrder = ['nome', 'plat', 'ano', 'button'];
    totalOfItems: number;

    private term: string = '';

    @ViewChild(MatPaginator) paginator: MatPaginator;

    constructor(private jogoService: JogoService,
                private dialog: MatDialog) { }

    ngOnInit() {
        this.jogoDataSource = new JogoDataSource(this.jogoService);
        this.jogoDataSource.loadJogos(0, 5, this.term);
    }

    ngAfterViewInit() {
        this.paginator.page
            .pipe(
                tap(() => this.jogoDataSource.loadJogos(this.paginator.pageIndex, this.paginator.pageSize, this.term))
            )
            .subscribe();
    }

    findByNomeOrPlatform(term: string): void {
        this.term = term;
        this.jogoDataSource.loadJogos(0, 5, this.term);
    }

    openDialog(jogo: Jogo, title: string): MatDialogRef<JogoModalComponent> {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.width = '600px';
        dialogConfig.data = {
            title: title,
            jogo: jogo
        }

        return this.dialog.open(JogoModalComponent, dialogConfig);
    }

    edit(jogo: Jogo) {
        let dialogRef = this.openDialog(jogo, 'Editar');

        dialogRef.afterClosed().subscribe(
            data => {
                if (data) {
                    this.jogoDataSource.updateJogo(data, this.paginator.pageIndex, this.paginator.pageSize, this.term);
                }
            }
        );
    }

    create() {
        let dialogRef = this.openDialog(null, 'Novo Jogo');

        dialogRef.afterClosed().subscribe(
            data => {
                if (data) {
                    this.jogoDataSource.createJogo(data);
                }
            }
        );
    }

    zeroItems(): boolean {
        let isZero: boolean;
        this.jogoDataSource.total$.subscribe(total => { isZero = total === 0 });
        return isZero;
    }
}
