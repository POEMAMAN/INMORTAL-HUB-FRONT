import { TerminatorVideoGames } from '../../interfaces/TerminatorVideoGames.interface';
import { terminatorVideoGamesService } from '../../services/terminatorVideoGames.service';
import { Component, OnInit } from '@angular/core';
import { AudioService } from '../../../terminatorSoundtrack/soundtrack.service';

@Component({
  selector: 'app-terminatorVideoGames-page',
  templateUrl: './terminatorVideoGames-page.component.html',
  styleUrls: ['./terminatorVideoGames-page.component.scss']
})
export class terminatorVideoGamesPageComponent implements OnInit {
  terminatorVideoGames: TerminatorVideoGames[] = []
  constructor(private terminatorVideoGamesService: terminatorVideoGamesService, private audioService: AudioService  ) {}


  ngOnInit(){
    this.terminatorVideoGamesService.getTerminatorVideoGames().subscribe({
      next: (terminatorVideoGames: TerminatorVideoGames[]) => {
        this.terminatorVideoGames = terminatorVideoGames
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

