import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { Jogador } from 'src/app/models/jogador';
import { JogadorService } from 'src/app/services/jogador.service';
import { JogadorHeroiModel } from 'src/app/models/JogadorHeroiModel';
import { Heroi } from 'src/app/models/heroi';

@Component({
    selector: 'app-jogador',
    templateUrl: './jogador.component.html',
    styleUrls: ['./jogador.component.scss']
})
export class JogadorComponent implements OnInit {
    jogador$: Observable<JogadorHeroiModel>;
    id: number;

    constructor(private route: ActivatedRoute,
                private jogadorService: JogadorService) { }

    ngOnInit() {
        this.jogador$ = this.route.paramMap.pipe(
            switchMap((params: ParamMap) => this.jogadorService.getJogador(params.get('id')))
        );
    }
}
