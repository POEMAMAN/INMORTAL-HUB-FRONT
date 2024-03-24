
import { StarTrekCharacter } from '../interfaces/StarTrekCharacters.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class starTrekCharactersService {

  

  constructor(private http: HttpClient) { }

  getStarTrekCharacters(){
      return this.http.get<StarTrekCharacter[]>('http://localhost:8084/universes/starTrek/characters')
  }
}
