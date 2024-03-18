
import { HarryPotterBook } from '../interfaces/HarryPotterBooks.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class harryPotterBooksService {

  

  constructor(private http: HttpClient) { }

  getHarryPotterBooks(){
      return this.http.get<HarryPotterBook[]>('http://localhost:8084/universes/harryPotter/books')
  }

}
