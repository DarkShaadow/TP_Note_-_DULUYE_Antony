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
import { MusicEditorComponent } from './components/music-editor/music-editor.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDialogModule} from "@angular/material/dialog";
import {MatInputModule} from "@angular/material/input";

@NgModule({
    declarations: [
        AppComponent,
        MusicListComponent,
        CardComponent,
        TabloComponent,
        MusicEditorComponent
    ],
    imports: [
        BrowserModule,
        MatCardModule,
        MatIconModule,
        MatButtonModule,
        MatTableModule,
        HttpClientModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatDialogModule,
        MatInputModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
