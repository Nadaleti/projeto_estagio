import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { MatSidenavModule, MatExpansionModule, MatTableModule, 
  MatInputModule, MatPaginatorModule, MatProgressSpinnerModule, 
  MatSortModule} from '@angular/material';
import { JogoListComponent } from './components/jogo-list/jogo-list.component';
import { HeroiListComponent } from './components/heroi-list/heroi-list.component';

@NgModule({
  declarations: [
    AppComponent,
    JogoListComponent,
    HeroiListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
=======
import {
>>>>>>> jogo_frontend
    MatSidenavModule,
    MatExpansionModule,
    MatTableModule,
    MatPaginatorModule,
<<<<<<< HEAD
    MatSortModule,
    MatInputModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
=======
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatButtonToggleModule
} from '@angular/material';
import { JogoListComponent } from './components/jogo-list/jogo-list.component';
import { JogoModalComponent } from './components/jogo-modal/jogo-modal.component';

@NgModule({
    declarations: [
        AppComponent,
        JogoListComponent,
        JogoModalComponent
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
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatButtonModule,
        MatDialogModule,
        ReactiveFormsModule,
        MatButtonToggleModule
    ],
    providers: [],
    bootstrap: [AppComponent],
    entryComponents: [JogoModalComponent]
>>>>>>> jogo_frontend
})
export class AppModule { }