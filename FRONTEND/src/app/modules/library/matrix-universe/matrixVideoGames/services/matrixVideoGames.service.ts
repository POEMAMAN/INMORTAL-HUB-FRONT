
import { MatrixVideoGames } from '../interfaces/MatrixVideoGames.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class matrixVideoGamesService {

  

  constructor(private http: HttpClient) { }

  getMatrixVideoGames(){
      return this.http.get<MatrixVideoGames[]>('http://localhost:8084/universes/matrix/videoGames')
  }

}
