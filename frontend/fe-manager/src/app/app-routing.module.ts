import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JogoListComponent } from './components/jogo-list/jogo-list.component'
import { HeroiListComponent } from './components/heroi-list/heroi-list.component'

const routes: Routes = [
  {path: 'jogos', component: JogoListComponent},
  {path: 'herois', component: HeroiListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
