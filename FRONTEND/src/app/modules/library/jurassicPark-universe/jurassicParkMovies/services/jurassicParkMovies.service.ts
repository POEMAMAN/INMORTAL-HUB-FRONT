import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JurassicParkMovie } from '../interfaces/JurassicParkMovies.interface';

@Injectable({
  providedIn: 'root'
})
export class jurassicParkMoviesService {

  

  constructor(private http: HttpClient) { }

  getJurassicParkMovies(): Observable<JurassicParkMovie[]> {
    return this.http.get<JurassicParkMovie[]>('http://localhost:8084/universes/jurassicPark/movies');
  }
}

