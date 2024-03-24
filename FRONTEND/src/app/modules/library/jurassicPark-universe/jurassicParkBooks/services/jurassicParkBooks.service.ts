
import { JurassicParkBook } from '../interfaces/JurassicParkBooks.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class jurassicParkBooksService {

  

  constructor(private http: HttpClient) { }

  getJurassicParkBooks(){
      return this.http.get<JurassicParkBook[]>('http://localhost:8084/universes/jurassicPark/books')
  }

}
