
import { TerminatorVideoGames } from '../interfaces/TerminatorVideoGames.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class terminatorVideoGamesService {

  

  constructor(private http: HttpClient) { }

  getTerminatorVideoGames(){
      return this.http.get<TerminatorVideoGames[]>('http://localhost:8084/universes/terminator/videoGames')
  }

}
