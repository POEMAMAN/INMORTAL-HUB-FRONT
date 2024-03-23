
import { MissionImposibleCharacter } from '../interfaces/MissionImposibleCharacters.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class missionImposibleCharactersService {

  

  constructor(private http: HttpClient) { }

  getMissionImposibleCharacters(){
      return this.http.get<MissionImposibleCharacter[]>('http:/localhost:8084//universes/ImposibleMission/characters')
  }
}
