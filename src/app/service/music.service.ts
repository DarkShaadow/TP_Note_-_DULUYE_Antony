import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Music} from "../model/Music";
import {API_URL} from "../shared/Constante";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  constructor(private client: HttpClient) { }

  public getMusics(): Observable<Music[]> {
    return this.client.get<Music[]>(`${API_URL}/musics`);
  }
}
