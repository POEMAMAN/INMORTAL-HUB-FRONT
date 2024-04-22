
import { AlienVideoGames } from '../interfaces/AlienVideoGames.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class alienVideoGamesService {

  

  constructor(private http: HttpClient) { }

  getAlienVideoGames(){
      return this.http.get<AlienVideoGames[]>('https://importal-hub-back-a54zucve2-inmortal-hubs-projects.vercel.app//universes/alien/videogames')
  }

}
