import { Component, OnInit, Input, Inject } from '@angular/core';
import { SummonService } from 'src/app/services/summon.service';
import { Jogador } from 'src/app/models/jogador';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map, debounceTime, tap, delay } from 'rxjs/operators';
import { MAT_DIALOG_DATA } from '@angular/material';
import { heroiJogador } from 'src/app/models/heroiJogador';

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

    getHeroiJogador(color: string): void {
        this.load = true;

        if (!this.nome)
            this.summonService.getHeroiJogador(
                this.jogadores.find(jogador => jogador.nome === this.jogadorSearch.value), color)
                    .pipe(
                        debounceTime(3000),
                        tap(data => {this.heroi = data; this.load = false})
                    )
                    .subscribe();
        else
            this.summonService.getHeroiJogador(
                this.jogadores.find(jogador => jogador.nome === this.nome), color)
                    .pipe(
                        delay(2000),
                        tap(data => {this.heroi = data; this.load = false})
                    )
                    .subscribe();
    }

    filterByName(value: string): Jogador[] {
        return this.jogadores
            .filter(jogador => jogador.nome.toLowerCase().includes(value.toLowerCase()));
    }
}
