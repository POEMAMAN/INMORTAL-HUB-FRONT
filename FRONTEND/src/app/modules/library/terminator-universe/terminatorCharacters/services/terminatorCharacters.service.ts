
import { TerminatorCharacter } from '..//interfaces/TerminatorCharacters.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class terminatorCharactersService {

  

  constructor(private http: HttpClient) { }

  getTerminatorCharacters(){
      return this.http.get<TerminatorCharacter[]>('http://localhost:8084/universes/terminator/characters')
  }
}
