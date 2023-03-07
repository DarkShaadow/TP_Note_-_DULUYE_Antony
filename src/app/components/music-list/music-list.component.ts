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
    randomView: boolean;
    data: Music[];
    randomMusic: Music;
    searchTerm: string | undefined;

    constructor(private musicService: MusicService,
                private dialog: MatDialog) {
        this.toggleView = true;
        this.randomView = false;
        this.data = [];
        this.randomMusic = {
            id: "",
            title: "",
            description: "",
            album: "",
            artist: "",
            duration: "",
            date: new Date,
            styles: [],
            picture: "",
        };
    }

    ngOnInit(): void {
        this.loadMusics();
    }

    loadMusics() {
        this.musicService.getAll()
            .subscribe(response => {
                this.data = response;
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

    onClickRandomView() {
        this.randomView = !this.randomView;

        if (this.randomView) {
            this.musicService.random()
                .subscribe(response => this.randomMusic = response);
        }
    }

    onClickRefreshRandomMusic() {
        this.musicService.random()
            .subscribe(response => this.randomMusic = response);
    }

    onClickSearchMusicByName() {
        if (this.searchTerm !== undefined && this.searchTerm.trim() != "") {
            this.musicService.search(this.searchTerm)
                .subscribe(response => {
                    this.data = response;
                });
        }
        else {
            this.loadMusics();
        }
    }
}