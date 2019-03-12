import { Component, OnInit, ViewChild } from '@angular/core';
import { JogoDataSource } from './jogoDataSource';
import { JogoService } from 'src/app/services/jogo.service';
import { MatPaginator } from '@angular/material';
import { tap, distinctUntilChanged, debounce, debounceTime, switchMap } from 'rxjs/operators';
import { Subject } from 'rxjs';

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

    constructor(private jogoService: JogoService) { }

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
}
