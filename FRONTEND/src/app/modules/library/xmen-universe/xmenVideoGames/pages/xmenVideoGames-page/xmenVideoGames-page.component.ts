import { xmenVideoGames } from '../../interfaces/xmenVideoGames.interface';
import { xmenVideoGamesService } from '../../services/xmenVideoGames.service';
import { Component, OnInit } from '@angular/core';
import { AudioService } from '../../../xmenSoundtrack/soundtrack.service';

@Component({
  selector: 'app-xmenVideoGames-page',
  templateUrl: './xmenVideoGames-page.component.html',
  styleUrls: ['./xmenVideoGames-page.component.scss']
})
export class xmenVideoGamesPageComponent implements OnInit {
  xmenVideoGames: xmenVideoGames[] = []
  constructor(private xmenVideoGamesService: xmenVideoGamesService, private audioService: AudioService  ) {}


  ngOnInit(){
    this.xmenVideoGamesService.getxmenVideoGames().subscribe({
      next: (xmenVideoGames: xmenVideoGames[]) => {
        this.xmenVideoGames = xmenVideoGames
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

