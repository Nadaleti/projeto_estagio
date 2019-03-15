import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JogoListComponent } from './components/jogo-list/jogo-list.component'
import { HeroiListComponent } from './components/heroi-list/heroi-list.component'
import { JogadorListComponent } from './components/jogador-list/jogador-list.component';
import { JogadorComponent } from './components/jogador/jogador.component';

const routes: Routes = [
  {path: 'jogos', component: JogoListComponent},
  {path: 'herois', component: HeroiListComponent},
  {path: 'jogadores', component: JogadorListComponent},
  {path: 'jogadores/:id', component: JogadorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
