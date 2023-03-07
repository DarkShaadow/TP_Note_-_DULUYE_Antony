import {Component, OnInit} from '@angular/core';
import {Music} from "../../model/Music";
import {MusicService} from "../../service/music.service";

@Component({
    selector: 'app-music-list',
    templateUrl: './music-list.component.html',
    styleUrls: ['./music-list.component.css']
})
export class MusicListComponent implements OnInit {

    toggleView: boolean;
    data: Music[];

    constructor(private musicService: MusicService) {
        this.toggleView = false;
        this.data = [];
    }

    ngOnInit(): void {
        this.musicService.getMusics()
            .subscribe(response => {
                this.data = response;
            });
    }

    onClickToggleView() {
        this.toggleView = !this.toggleView;
    }
}
