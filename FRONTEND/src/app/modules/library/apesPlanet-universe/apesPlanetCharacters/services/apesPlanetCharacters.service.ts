
import { ApesPlanetCharacter } from '../interfaces/ApesPlanetCharacters.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class apesPlanetCharactersService {

  

  constructor(private http: HttpClient) { }

  getApesPlanetCharacters(){
      return this.http.get<ApesPlanetCharacter[]>('http://localhost:8084/universes/apesPlanet/characters')
  }
}
