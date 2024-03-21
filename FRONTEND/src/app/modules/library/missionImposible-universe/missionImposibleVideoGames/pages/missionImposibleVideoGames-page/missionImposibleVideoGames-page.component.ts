import { MissionImposibleVideoGames } from '../../interfaces/MissionImposibleVideoGames.interface';
import { missionImposibleVideoGamesService } from '../../services/missionImposibleVideoGames.service';
import { Component, OnInit } from '@angular/core';
import { AudioService } from '../../../missionImposibleSoundtrack/soundtrack.service';

@Component({
  selector: 'app-missionImposibleVideoGames-page',
  templateUrl: './missionImposibleVideoGames-page.component.html',
  styleUrls: ['./missionImposibleVideoGames-page.component.scss']
})
export class missionImposibleVideoGamesPageComponent implements OnInit {
  missionImposibleVideoGames: MissionImposibleVideoGames[] = []
  constructor(private missionImposibleVideoGamesService: missionImposibleVideoGamesService, private audioService: AudioService ) {}


  ngOnInit(){
    this.missionImposibleVideoGamesService.getMissionImposibleVideoGames().subscribe({
      next: (missionImposibleVideoGames: MissionImposibleVideoGames[]) => {
        this.missionImposibleVideoGames = missionImposibleVideoGames
      },
      error: () => {}
    })
  }
  playSound(): void {
    this.audioService.playSound();
  }
  stopSound(): void {
    this.audioService.stopSound();
  }
};
