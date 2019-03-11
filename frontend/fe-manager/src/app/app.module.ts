import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatSidenavModule, MatExpansionModule, MatTableModule, MatPaginatorModule } from '@angular/material';
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
    MatSidenavModule,
    MatExpansionModule,
    MatTableModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }