import { AlienVideoGames } from '../../interfaces/AlienVideoGames.interface';
import { alienVideoGamesService } from '../../services/alienVideoGames.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alienVideoGames-page',
  templateUrl: './alienVideoGames-page.component.html',
  styleUrls: ['./alienVideoGames-page.component.scss']
})
export class alienVideoGamesPageComponent implements OnInit {
  alienVideoGames: AlienVideoGames[] = []
  constructor(private alienVideoGamesService: alienVideoGamesService ) {}


  ngOnInit(){
    this.alienVideoGamesService.getAlienVideoGames().subscribe({
      next: (alienVideoGames: AlienVideoGames[]) => {
        this.alienVideoGames = alienVideoGames
      },
      error: () => {}
    })
  }
  

}
