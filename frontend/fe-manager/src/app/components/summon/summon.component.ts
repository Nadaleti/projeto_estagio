import { Component, OnInit, Input, Inject } from '@angular/core';
import { SummonService } from 'src/app/services/summon.service';
import { Jogador } from 'src/app/models/jogador';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map, debounceTime, tap, delay } from 'rxjs/operators';
import { MAT_DIALOG_DATA, MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material';
import { heroiJogador } from 'src/app/models/heroiJogador';
import { Heroi } from 'src/app/models/heroi';
import { Jogo } from 'src/app/models/jogo';
import { ViewModalHeroiComponent } from '../view-modal-heroi/view-modal-heroi.component';
import { HeroiService } from 'src/app/services/heroi.service';

@Component({
    selector: 'app-summon',
    templateUrl: './summon.component.html',
    styleUrls: ['./summon.component.scss']
})
export class SummonComponent implements OnInit {

    jogadores: Jogador[];
    jogadoresFiltrados: Observable<Jogador[]>;
    jogadorSearch: FormControl = new FormControl('');
    heroi: heroiJogador;
    nome: string;
    load: boolean = false;

    constructor(private summonService: SummonService,
                private heroiService: HeroiService,
                private dialog: MatDialog,
                private dialogRef: MatDialogRef<SummonComponent>,
                @Inject(MAT_DIALOG_DATA) data) {
                    this.nome = data;
                }

    ngOnInit() {
        this.summonService.getAllJogadores().subscribe(data => {
            this.jogadores = data;
            this.jogadoresFiltrados = this.jogadorSearch.valueChanges
            .pipe(
                startWith(''),
                map(value => this.filterByName(value))
            );
        });
    }

    openViewHeroiDialog(heroiJogador: heroiJogador, jogos: Jogo[]): MatDialogRef<ViewModalHeroiComponent> {
        let dialogConfig = new MatDialogConfig();
        dialogConfig.height = '510px';
        dialogConfig.width = '700px';
        dialogConfig.data = {
            heroi: heroiJogador.heroi,
            jogos: jogos,
            raridade: heroiJogador.raridade,
            nivel: heroiJogador.level
        };

        return this.dialog.open(ViewModalHeroiComponent, dialogConfig);
    }

    getHeroiJogador(color: string): void {
        this.load = true;

        if (!this.nome)
            this.summonService.getHeroiJogador(
                this.jogadores.find(jogador => jogador.nome === this.jogadorSearch.value), color)
                    .pipe(
                        delay(1500),
                        tap(heroiJogador => {
                            this.load = false;
                            this.dialogRef.close();
                            this.heroiService.getJogos(heroiJogador.heroi.id)
                                .subscribe(jogos => this.openViewHeroiDialog(heroiJogador, jogos));
                        })
                    )
                    .subscribe();
        else
            this.summonService.getHeroiJogador(
                this.jogadores.find(jogador => jogador.nome === this.nome), color)
                    .pipe(
                        delay(1500),
                        tap(heroiJogador => {
                            this.load = false;
                            this.dialogRef.close();
                            this.heroiService.getJogos(heroiJogador.heroi.id)
                                .subscribe(jogos => this.openViewHeroiDialog(heroiJogador, jogos));
                        })
                    )
                    .subscribe();
    }

    filterByName(value: string): Jogador[] {
        return this.jogadores
            .filter(jogador => jogador.nome.toLowerCase().includes(value.toLowerCase()));
    }
}
