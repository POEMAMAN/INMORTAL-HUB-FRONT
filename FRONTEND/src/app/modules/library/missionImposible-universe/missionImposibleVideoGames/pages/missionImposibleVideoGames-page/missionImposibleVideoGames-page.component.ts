import { MissionImposibleVideoGames } from '../../interfaces/MissionImposibleVideoGames.interface';
import { missionImposibleVideoGamesService } from '../../services/missionImposibleVideoGames.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-missionImposibleVideoGames-page',
  templateUrl: './missionImposibleVideoGames-page.component.html',
  styleUrls: ['./missionImposibleVideoGames-page.component.scss']
})
export class missionImposibleVideoGamesPageComponent implements OnInit {
  missionImposibleVideoGames: MissionImposibleVideoGames[] = []
  constructor(private missionImposibleVideoGamesService: missionImposibleVideoGamesService ) {}


  ngOnInit(){
    this.missionImposibleVideoGamesService.getMissionImposibleVideoGames().subscribe({
      next: (missionImposibleVideoGames: MissionImposibleVideoGames[]) => {
        this.missionImposibleVideoGames = missionImposibleVideoGames
      },
      error: () => {}
    })
  }
  

}
