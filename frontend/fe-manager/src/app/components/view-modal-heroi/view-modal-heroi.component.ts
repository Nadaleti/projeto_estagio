import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Heroi } from '../../models/heroi';
import { Jogo } from 'src/app/models/jogo';


@Component({
  selector: 'app-view-modal-heroi',
  templateUrl: './view-modal-heroi.component.html',
  styleUrls: ['./view-modal-heroi.component.scss']
})

export class ViewModalHeroiComponent implements OnInit {
  heroi: Heroi;
  jogos: Jogo[];
  raridade: number;
  nivel: number;

  constructor(private dialogRef: MatDialogRef<ViewModalHeroiComponent>, @Inject(MAT_DIALOG_DATA) data ){ 
    this.heroi = data.heroi;
    this.jogos = data.jogos;
    this.raridade = data.raridade;
    this.nivel = data.nivel;
    console.log(this.jogos);
    }

  ngOnInit() {
    heroi: undefined;
    jogos: undefined;
    raridade: undefined;
    nivel: undefined;
  }

  close(){
    this.dialogRef.close();
  }

}
