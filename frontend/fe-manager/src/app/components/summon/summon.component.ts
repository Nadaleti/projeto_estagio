import { Component, OnInit, Input } from '@angular/core';
import { SummonService } from 'src/app/services/summon.service';
import { Jogador } from 'src/app/models/jogador';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

@Component({
    selector: 'app-summon',
    templateUrl: './summon.component.html',
    styleUrls: ['./summon.component.scss']
})
export class SummonComponent implements OnInit {

    jogadores: Jogador[];
    jogadoresFiltrados: Observable<Jogador[]>;
    jogadorSearch: FormControl = new FormControl('');
    @Input() nome: string;

    constructor(private summonService: SummonService) { }

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

    getHeroiJogador() {

        if (!this.nome)
            this.summonService.getHeroiJogador(
                this.jogadores.find(jogador => jogador.nome === this.jogadorSearch.value))
                    .subscribe(data => console.log(data));
        else
            this.summonService.getHeroiJogador(
                this.jogadores.find(jogador => jogador.nome === this.nome))
                    .subscribe(data => console.log(data));
    }

    filterByName(value: string): Jogador[] {
        return this.jogadores
            .filter(jogador => jogador.nome.toLowerCase().includes(value.toLowerCase()));
    }
}
