import { Component, OnInit, ViewChild } from '@angular/core';
import { HeroiDatasource } from './heroiDataSource';
import { HeroiService } from 'src/app/services/heroi.service';
import { MatPaginator } from '@angular/material';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-heroi-list',
  templateUrl: './heroi-list.component.html',
  styleUrls: ['./heroi-list.component.scss']
})

export class HeroiListComponent implements OnInit {
  heroiDatasource: HeroiDatasource;
  //columnsOrder = ['nome', 'alc', 'hp', 'atk', 'spd', 'def', 'res', 'clas', 'mov'];
  columnsOrder = ['nome', 'alc', 'clas', 'mov'];
  totalOfItems: number;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private heroiService: HeroiService) { }

  ngOnInit() {
    this.heroiDatasource = new HeroiDatasource(this.heroiService);
    this.heroiDatasource.loadHerois(0, 5);
  }

  ngAfterViewInit() {
    this.paginator.page
        .pipe(
            tap(() => this.heroiDatasource.loadHerois(this.paginator.pageIndex, this.paginator.pageSize))
        )
        .subscribe();
}

}
