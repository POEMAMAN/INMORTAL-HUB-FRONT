import { residentEvilVideoGames } from '../../interfaces/residentEvilVideoGames.interface';
import { residentEvilVideoGamesService } from '../../services/residentEvilVideoGames.service';
import { Component, OnInit } from '@angular/core';
import { AudioService } from '../../../residentEvilSoundtrack/soundtrack.service';

@Component({
  selector: 'app-residentEvilVideoGames-page',
  templateUrl: './residentEvilVideoGames-page.component.html',
  styleUrls: ['./residentEvilVideoGames-page.component.scss']
})
export class residentEvilVideoGamesPageComponent implements OnInit {
  residentEvilVideoGames: residentEvilVideoGames[] = []
  constructor(private residentEvilVideoGamesService: residentEvilVideoGamesService, private audioService: AudioService  ) {}


  ngOnInit(){
    this.residentEvilVideoGamesService.getresidentEvilVideoGames().subscribe({
      next: (residentEvilVideoGames: residentEvilVideoGames[]) => {
        this.residentEvilVideoGames = residentEvilVideoGames
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

