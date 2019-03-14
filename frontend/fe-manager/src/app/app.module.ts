import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { MatSidenavModule, MatExpansionModule, MatTableModule, 
  MatInputModule, MatPaginatorModule, MatProgressSpinnerModule, 
  MatSortModule, MatFormFieldModule,  MatIconModule, MatButtonModule,
  MatDialogModule, MatButtonToggleModule, MatSelectModule, 
  MatGridListModule, MatCardModule, MatTabsModule, MatDividerModule ,
  MatListModule, MatRadioModule, MatAutocompleteModule} from '@angular/material';

import { JogoListComponent } from './components/jogo-list/jogo-list.component';
import { HeroiListComponent } from './components/heroi-list/heroi-list.component';
import { AppComponent } from './app.component';
import { JogoModalComponent } from './components/jogo-modal/jogo-modal.component';
import { DeleteModalComponent } from './components/delete-modal/delete-modal.component';
import { ViewModalHeroiComponent } from './components/view-modal-heroi/view-modal-heroi.component';
import { JogadorListComponent } from './components/jogador-list/jogador-list.component';
import { JogadorModalComponent } from './components/jogador-modal/jogador-modal.component';
import { SummonComponent } from './components/summon/summon.component';

@NgModule({
  declarations: [
    AppComponent,
    JogoListComponent,
    HeroiListComponent,
    JogoModalComponent,
    DeleteModalComponent,
    ViewModalHeroiComponent,
    JogadorListComponent,
    JogadorModalComponent,
    SummonComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MatSidenavModule,
    MatExpansionModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatButtonToggleModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatGridListModule,
    MatCardModule,
    MatDividerModule,
    MatListModule,
    MatAutocompleteModule,
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [JogoModalComponent, JogadorModalComponent, ViewModalHeroiComponent, DeleteModalComponent]
})

export class AppModule { }