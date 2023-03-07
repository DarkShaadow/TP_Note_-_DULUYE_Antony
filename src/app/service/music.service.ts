import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Music} from "../model/Music";
import {API_URL} from "../shared/Constante";
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class MusicService {

    constructor(private client: HttpClient) {
    }

    public getAll(): Observable<Music[]> {
        return this.client.get<Music[]>(`${API_URL}/musics`);
    }
    public random(): Observable<Music> {
        return this.client.get<Music>(`${API_URL}/musics/random`);
    }
    public create(music: Music): Observable<any> {
        return this.client.post(`${API_URL}/musics`, music);
    }
    public update(music: Music): Observable<any> {
        return this.client.put(`${API_URL}/musics/${music?.id}`, music);
    }

    public delete(music: Music): Observable<any> {
        return this.client.delete(`${API_URL}/musics/${music?.id}`);
    }
}
