import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Music} from "../../model/Music";

@Component({
    selector: 'app-music-editor',
    templateUrl: './music-editor.component.html',
    styleUrls: ['./music-editor.component.css']
})
export class MusicEditorComponent implements OnInit {
    dialogType: "create" | "update";
    form: FormGroup;

    currentMusic: Music | undefined;

    constructor(private dialogRef: MatDialogRef<MusicEditorComponent>,
                @Inject(MAT_DIALOG_DATA) public data: Music | undefined) {
        this.form = MusicEditorComponent.buildForm();

        this.currentMusic = data;
        this.dialogType = this.currentMusic?.id == null ? "create" : "update";
    }

    private static buildForm(): FormGroup {
        return new FormGroup({
            titre: new FormControl("", Validators.compose([Validators.required, Validators.minLength(2)])),
            description: new FormControl(""),
            album: new FormControl(""),
            artist: new FormControl(""),
            duration: new FormControl(""),
            date: new FormControl("")
        });
    }

    fillFormWhenUpdating(): void {
        console.log("Filling form");
        this.form.patchValue({
            titre: this.currentMusic?.title,
            description: this.currentMusic?.description,
            album: this.currentMusic?.album,
            artist: this.currentMusic?.artist,
            duration: this.currentMusic?.duration,
            date: this.currentMusic?.date,
        })
    }

    cancel(): void {
        this.dialogRef.close();
    }

    validate(musicDialog: any): void {
        console.log(musicDialog);
        const returnedMusic = {
            id: this.currentMusic?.id,
            title: musicDialog.titre,
            description: musicDialog.description,
            album: musicDialog.album,
            artist: musicDialog.artist,
            duration: musicDialog.duration,
            date: musicDialog.date
        }
        this.dialogRef.close({music: returnedMusic});
    }

    ngOnInit(): void {
        if (this.dialogType == "update") {
            this.fillFormWhenUpdating();
        }
    }
}