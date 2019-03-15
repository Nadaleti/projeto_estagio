import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { JogadorService } from 'src/app/services/jogador.service';
import { JogadorHeroiModel } from 'src/app/models/JogadorHeroiModel';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { SummonComponent } from '../summon/summon.component';

@Component({
    selector: 'app-jogador',
    templateUrl: './jogador.component.html',
    styleUrls: ['./jogador.component.scss']
})
export class JogadorComponent implements OnInit {
    jogador$: Observable<JogadorHeroiModel>;

    constructor(private route: ActivatedRoute,
                private jogadorService: JogadorService, private dialog: MatDialog) { }

    ngOnInit() {
        this.jogador$ = this.route.paramMap.pipe(
            switchMap((params: ParamMap) => this.jogadorService.getJogador(params.get('id')))
        );
    }

    openSummon(nome: string) {
        const dialogConfig = new MatDialogConfig();

        dialogConfig.width = '300px';
        dialogConfig.data = nome;

        return this.dialog.open(SummonComponent, dialogConfig);
    }
}
