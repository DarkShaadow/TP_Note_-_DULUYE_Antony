import {Component, Input} from '@angular/core';
import {Music} from "../../../model/Music";

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css']
})
export class CardComponent {

    @Input()
    public music!: Music;

    constructor() {
    }
}
