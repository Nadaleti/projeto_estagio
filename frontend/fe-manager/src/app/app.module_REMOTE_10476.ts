import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
    MatSidenavModule,
    MatExpansionModule,
    MatTableModule,
    MatPaginatorModule,
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
})
export class AppModule { }