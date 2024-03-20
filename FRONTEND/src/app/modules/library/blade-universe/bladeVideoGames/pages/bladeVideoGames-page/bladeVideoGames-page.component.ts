import { BladeVideoGames } from '../../interfaces/BladeVideoGames.interface';
import { bladeVideoGamesService } from '../../services/bladeVideoGames.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bladeVideoGames-page',
  templateUrl: './bladeVideoGames-page.component.html',
  styleUrls: ['./bladeVideoGames-page.component.scss']
})
export class bladeVideoGamesPageComponent implements OnInit {
  bladeVideoGames: BladeVideoGames[] = []
  constructor(private bladeVideoGamesService: bladeVideoGamesService ) {}


  ngOnInit(){
    this.bladeVideoGamesService.getBladeVideoGames().subscribe({
      next: (bladeVideoGames: BladeVideoGames[]) => {
        this.bladeVideoGames = bladeVideoGames
      },
      error: () => {}
    })
  }
  

}
