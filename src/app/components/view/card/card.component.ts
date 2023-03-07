import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Music} from "../../../model/Music";

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css']
})
export class CardComponent {

    @Output('removeMusic')
    remove$: EventEmitter<any> = new EventEmitter();
    @Output('updateMusic')
    update$: EventEmitter<any> = new EventEmitter();

    @Input()
    public music!: Music;
    @Input()
    public random!: string;

    constructor() {
    }

    remove() {
        this.remove$.emit(this.music);
    }
    update() {
        this.update$.emit(this.music);
    }

    getStyles(): string {
        if (this.music?.styles?.length == 0) {
            return "";
        }
        return this.music?.styles?.reduce((a, b) => a + " - " + b);
    }
}
