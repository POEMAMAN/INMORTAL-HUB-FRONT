
import { IndianaJonesCharacter } from '../interfaces/IndianaJonesCharacters.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class indianaJonesCharactersService {

  

  constructor(private http: HttpClient) { }

  getIndianaJonesCharacters(){
      return this.http.get<IndianaJonesCharacter[]>('http://localhost:8084/universes/indianaJones/characters')
  }
}
