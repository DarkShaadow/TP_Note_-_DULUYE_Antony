import {Component, Input, OnInit} from '@angular/core';
import {Music} from "../../../model/Music";

@Component({
    selector: 'app-tablo',
    templateUrl: './tablo.component.html',
    styleUrls: ['./tablo.component.css']
})
export class TabloComponent implements OnInit {

    @Input()
    public musics!: Music[];

    constructor() {
    }

    ngOnInit(): void {
    }

    getStyles(music: Music): string {
        return music.styles?.reduce((a, b) => a + " " + b);
    }
}
