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
  MatListModule} from '@angular/material';

import { JogoListComponent } from './components/jogo-list/jogo-list.component';
import { HeroiListComponent } from './components/heroi-list/heroi-list.component';
import { AppComponent } from './app.component';
import { JogoModalComponent } from './components/jogo-modal/jogo-modal.component';
import { DeleteModalComponent } from './components/delete-modal/delete-modal.component';
import { ViewModalHeroiComponent } from './components/view-modal-heroi/view-modal-heroi.component';

@NgModule({
  declarations: [
    AppComponent,
    JogoListComponent,
    HeroiListComponent,
    JogoModalComponent,
    DeleteModalComponent,
    ViewModalHeroiComponent
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
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [JogoModalComponent, DeleteModalComponent, ViewModalHeroiComponent]
})

export class AppModule { }