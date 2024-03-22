
import { CrepusculoCharacter } from '../interfaces/CrepusculoCharacters.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class crepusculoCharactersService {

  

  constructor(private http: HttpClient) { }

  getCrepusculoCharacters(){
      return this.http.get<CrepusculoCharacter[]>('http://localhost:8084/universes/crepusculo/characters')
  }
}
