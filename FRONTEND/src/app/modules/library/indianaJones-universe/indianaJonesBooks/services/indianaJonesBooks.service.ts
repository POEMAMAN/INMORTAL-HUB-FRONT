
import { IndianaJonesBook } from '../interfaces/IndianaJonesBooks.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class indianaJonesBooksService {

  

  constructor(private http: HttpClient) { }

  getIndianaJonesBooks(){
      return this.http.get<IndianaJonesBook[]>('http://localhost:8084/universes/indianaJones/books')
  }

}
