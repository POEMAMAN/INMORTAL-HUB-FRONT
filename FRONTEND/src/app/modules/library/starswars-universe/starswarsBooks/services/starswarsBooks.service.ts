
import { starswarsBook } from '../interfaces/starswarsBooks.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class starswarsBooksService {

  

  constructor(private http: HttpClient) { }

  getstarswarsBooks(){
      return this.http.get<starswarsBook[]>('http://localhost:8084/universes/starswars/books')
  }

}
