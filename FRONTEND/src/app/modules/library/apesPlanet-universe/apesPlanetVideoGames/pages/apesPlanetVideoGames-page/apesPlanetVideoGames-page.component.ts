import { ApesPlanetVideoGames } from '../../interfaces/apesPlanetVideoGames.interface';
import { apesPlanetVideoGamesService } from '../../services/apesPlanetVideoGames.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apesPlanetVideoGames-page',
  templateUrl: './apesPlanetVideoGames-page.component.html',
  styleUrls: ['./apesPlanetVideoGames-page.component.scss']
})
export class apesPlanetVideoGamesPageComponent implements OnInit {
  apesPlanetVideoGames: ApesPlanetVideoGames[] = []
  constructor(private apesPlanetVideoGamesService: apesPlanetVideoGamesService ) {}


  ngOnInit(){
    this.apesPlanetVideoGamesService.getApesPlanetVideoGames().subscribe({
      next: (apesPlanetVideoGames: ApesPlanetVideoGames[]) => {
        this.apesPlanetVideoGames = apesPlanetVideoGames
      },
      error: () => {}
    })
  }
  

}
