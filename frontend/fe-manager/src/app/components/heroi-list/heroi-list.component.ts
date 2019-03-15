import { Component, OnInit, ViewChild, AfterViewChecked, AfterViewInit, Input, ElementRef } from '@angular/core';
import { HeroiDatasource } from './heroiDataSource';
import { HeroiService } from 'src/app/services/heroi.service';
import { MatPaginator, MatSort, MatSelect, MatDialogRef, MatDialogConfig, MatDialog } from '@angular/material';
import { tap } from 'rxjs/operators';
import { merge, fromEvent, from } from 'rxjs';
import { Heroi } from 'src/app/models/heroi';
import { ViewModalHeroiComponent } from '../view-modal-heroi/view-modal-heroi.component';
import { Jogo } from 'src/app/models/jogo';
import { DeleteModalComponent } from '../delete-modal/delete-modal.component';

@Component({
  selector: 'app-heroi-list',
  templateUrl: './heroi-list.component.html',
  styleUrls: ['./heroi-list.component.scss']
})

export class HeroiListComponent implements OnInit, AfterViewInit {
  heroiDatasource: HeroiDatasource;
  //columnsOrder = ['nome', 'alc', 'hp', 'atk', 'spd', 'def', 'res', 'clas', 'mov'];
  columnsOrder = ['nome', 'alcunha', 'classe', 'movimentacao', 'edit', 'delete'];
  totalOfItems: number;
  dialogRef: MatDialogRef<ViewModalHeroiComponent>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('inputNome') inputNome: ElementRef;
  @ViewChild('inputClasse') inputClasse: MatSelect;
  @ViewChild('inputMov') inputMov: MatSelect;

  constructor(private heroiService: HeroiService, private dialog: MatDialog) { }

  ngOnInit() {
    this.heroiDatasource = new HeroiDatasource(this.heroiService);
    this.heroiDatasource.loadHerois(0, 10, 'nome', 'asc', "", "", "");
  }

  ngAfterViewInit() {
    merge(fromEvent(this.inputNome.nativeElement, 'keyup'), this.inputClasse.selectionChange, this.inputMov.selectionChange)
      .pipe(
        tap( () => {
          this.paginator.pageIndex = 0;
          this.heroiDatasource.loadHerois(this.paginator.pageIndex, this.paginator.pageSize, 
            this.sort.active, this.sort.direction.toString(), this.inputNome.nativeElement.value, 
            (!this.inputClasse.value) ? "" : this.inputClasse.value, 
            (!this.inputMov.value) ? "" : this.inputMov.value);
        })
      )
      .subscribe();

    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
    
    merge(this.sort.sortChange, this.paginator.page)
        .pipe(
            tap(() => this.heroiDatasource.loadHerois(this.paginator.pageIndex, this.paginator.pageSize, 
              this.sort.active, this.sort.direction.toString(), this.inputNome.nativeElement.value, 
              (!this.inputClasse.value) ? "" : this.inputClasse.value, 
              (!this.inputMov.value) ? "" : this.inputMov.value )
              )
        )
        .subscribe();
  }

  zeroItems(): boolean {
    let isZero: boolean;
    this.heroiDatasource.total$.subscribe(total => { isZero = total === 0 });
    return isZero;
  }

  openHeroDialog(heroi : Heroi, jogos: Jogo[]): MatDialogRef<ViewModalHeroiComponent>{
    const config = new MatDialogConfig();
    config.height = '510px';
    config.width = '700px';
    config.data = {
      heroi: heroi,
      jogos: jogos
    };

    return this.dialog.open(ViewModalHeroiComponent, config);
  }

  viewHero(row : Heroi){
    this.heroiService.getJogos(row.id).subscribe ( jogos => {
      this.dialogRef = this.openHeroDialog(row, jogos);
    })
  }

  delete(heroi: Heroi){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '500px';
    dialogConfig.data = {
        modalType: '',
        id: heroi.id,
        modalContent: heroi.nome
    }

    let dialogRef = this.dialog.open(DeleteModalComponent, dialogConfig);
    
    dialogRef.afterClosed().subscribe(
      data => {
        if (data) {
            if (this.paginator.length % this.paginator.pageSize === 1 && !this.paginator.hasNextPage()) {
                this.paginator.previousPage();
                this.heroiDatasource.deleteHeroi(data, -1, this.paginator.pageSize, this.sort.active, this.sort.direction.toString(), this.inputNome.nativeElement.value, 
                (!this.inputClasse.value) ? "" : this.inputClasse.value, 
                (!this.inputMov.value) ? "" : this.inputMov.value);
            } else
                this.heroiDatasource.deleteHeroi(data, this.paginator.pageIndex, this.paginator.pageSize, this.sort.active, this.sort.direction.toString(), this.inputNome.nativeElement.value, 
                (!this.inputClasse.value) ? "" : this.inputClasse.value, 
                (!this.inputMov.value) ? "" : this.inputMov.value);
        }
      }
    );
  }
}
