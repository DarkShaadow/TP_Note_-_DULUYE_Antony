import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {MusicListComponent} from './components/music-list/music-list.component';
import {CardComponent} from './components/view/card/card.component';
import {TabloComponent} from './components/view/tablo/tablo.component';
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatTableModule} from "@angular/material/table";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
    declarations: [
        AppComponent,
        MusicListComponent,
        CardComponent,
        TabloComponent
    ],
    imports: [
        BrowserModule,
        MatCardModule,
        MatIconModule,
        MatButtonModule,
        MatTableModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
