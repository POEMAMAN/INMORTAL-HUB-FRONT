
import { backToTheFutureVideoGames } from '../interfaces/backToTheFutureVideoGames.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class backToTheFutureVideoGamesService {

  

  constructor(private http: HttpClient) { }

  getbackToTheFutureVideoGames(){
      return this.http.get<backToTheFutureVideoGames[]>('http://localhost:8084/universes/backToTheFuture/videogames')
  }

}
