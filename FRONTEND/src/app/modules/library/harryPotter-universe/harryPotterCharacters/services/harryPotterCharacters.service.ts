
import { HarryPotterCharacter } from '../interfaces/HarryPotterCharacters.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class harryPotterCharactersService {

  

  constructor(private http: HttpClient) { }

  getHarryPotterCharacters(){
      return this.http.get<HarryPotterCharacter[]>('http://localhost:8084/universes/harryPotter/characters')
  }
}
