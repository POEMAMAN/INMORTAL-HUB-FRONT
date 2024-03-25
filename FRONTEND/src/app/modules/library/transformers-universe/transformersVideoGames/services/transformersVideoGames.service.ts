
import { transformersVideoGames } from '../interfaces/transformersVideoGames.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class transformersVideoGamesService {

  

  constructor(private http: HttpClient) { }

  gettransformersVideoGames(){
      return this.http.get<transformersVideoGames[]>('http://localhost:8084/universes/transformers/videogames')
  }

}
