import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Music} from "../../../model/Music";

@Component({
    selector: 'app-tablo',
    templateUrl: './tablo.component.html',
    styleUrls: ['./tablo.component.css']
})
export class TabloComponent implements OnInit {

    @Output('removeMusic')
    remove$: EventEmitter<any> = new EventEmitter();
    @Output('updateMusic')
    update$: EventEmitter<any> = new EventEmitter();

    @Input()
    public musics!: Music[];

    constructor() {
    }

    ngOnInit(): void {
    }

    getStyles(music: Music): string {
        console.log(music);
        if (music?.styles?.length == 0) {
            return "";
        }
        return music?.styles?.reduce((a, b) => a + " " + b);
    }

    remove(music: Music) {
        this.remove$.emit(music);
    }
    update(music: Music) {
        this.update$.emit(music);
    }
}
