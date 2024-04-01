
import { MatrixCharacter } from '../interfaces/MatrixCharacters.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class matrixCharactersService {

  

  constructor(private http: HttpClient) { }

  getMatrixCharacters(){
      return this.http.get<MatrixCharacter[]>('http://localhost:8084/universes/matrix/characters')
  }
}
