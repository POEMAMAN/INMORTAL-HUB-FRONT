
import { AlienCharacter } from '../interfaces/AlienCharacters.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class alienCharactersService {

  

  constructor(private http: HttpClient) { }

  getAlienCharacters(){
      return this.http.get<AlienCharacter[]>('https://importal-hub-back-a54zucve2-inmortal-hubs-projects.vercel.app/universes/alien/characters')
  }
}
