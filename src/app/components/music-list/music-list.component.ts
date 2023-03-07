import {Component, OnInit} from '@angular/core';
import {Music} from "../../model/Music";
import {MusicService} from "../../service/music.service";
import {MusicEditorComponent} from "../music-editor/music-editor.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
    selector: 'app-music-list',
    templateUrl: './music-list.component.html',
    styleUrls: ['./music-list.component.css']
})
export class MusicListComponent implements OnInit {

    toggleView: boolean;
    data: Music[];

    constructor(private musicService: MusicService,
                private dialog: MatDialog) {
        this.toggleView = false;
        this.data = [];
    }

    ngOnInit(): void {
        this.loadMusics();
    }

    loadMusics() {
        this.musicService.getAll()
            .subscribe(response => {
                this.data = response;
                console.log(response);
            });
    }

    onClickToggleView() {
        this.toggleView = !this.toggleView;
    }

    add() {
        const dialogRef = this.dialog.open(MusicEditorComponent, {data: undefined})

        dialogRef.afterClosed().subscribe(result => {
            if (result != null) {
                this.musicService.create(result.music)
                    .subscribe(() => this.loadMusics());
            }
        });
    }

    remove(music: Music) {
        this.musicService.delete(music)
            .subscribe(() => this.loadMusics());
    }

    update(music: Music) {
        const dialogRef = this.dialog.open(MusicEditorComponent, {data: music})

        dialogRef.afterClosed().subscribe(result => {
            if (result != null) {
                this.musicService.update(result.music)
                    .subscribe(() => this.loadMusics());
            }
        });
    }
}