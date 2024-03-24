
import { MissionImposibleVideoGames } from '../interfaces/MissionImposibleVideoGames.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class missionImposibleVideoGamesService {

  

  constructor(private http: HttpClient) { }

  getMissionImposibleVideoGames(){
      return this.http.get<MissionImposibleVideoGames[]>('http://localhost:8084/universes/MissionImposible/videoGames')
  }

}
