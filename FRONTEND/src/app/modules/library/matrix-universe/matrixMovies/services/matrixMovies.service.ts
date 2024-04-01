
import { MatrixMovie } from '../interfaces/MatrixMovies.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class matrixMoviesService {

  

  constructor(private http: HttpClient) { }

  getMatrixMovies(){
      return this.http.get<MatrixMovie[]>('http://localhost:8084/universes/matrix/movies')
  }
}
