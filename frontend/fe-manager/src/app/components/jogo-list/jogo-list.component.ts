import { Component, OnInit, ViewChild } from '@angular/core';
import { JogoDataSource } from './jogoDataSource';
import { JogoService } from 'src/app/services/jogo.service';
import { MatPaginator } from '@angular/material';
import { tap, map } from 'rxjs/operators';

@Component({
    selector: 'app-jogo-list',
    templateUrl: './jogo-list.component.html',
    styleUrls: ['./jogo-list.component.scss']
})
export class JogoListComponent implements OnInit {
    jogoDataSource: JogoDataSource;
    columnsOrder = ['nome', 'plat', 'ano'];
    totalOfItems: number;

    @ViewChild(MatPaginator) paginator: MatPaginator;

    constructor(private jogoService: JogoService) { }

    ngOnInit() {
        this.jogoDataSource = new JogoDataSource(this.jogoService);
        this.jogoDataSource.loadJogos(0, 5);
    }

    ngAfterViewInit() {
        this.paginator.page
            .pipe(
                tap(() => this.jogoDataSource.loadJogos(this.paginator.pageIndex, this.paginator.pageSize))
            )
            .subscribe();
    }
}
