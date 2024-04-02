import { backToTheFutureCharacter } from '../../interfaces/BackToTheFutureCharacters.interface';
import { backToTheFutureCharactersService } from '../../services/backToTheFutureCharacters.service';
import { Component, OnInit } from '@angular/core';
import { AudioService } from '../../../backToTheFutureSoundtrack/soundtrack.service';

@Component({
  selector: 'app-backToTheFutureCharacters-page',
  templateUrl: './backToTheFutureCharacters-page.component.html',
  styleUrls: ['./backToTheFutureCharacters-page.component.scss']
})
export class backToTheFutureCharactersPageComponent implements OnInit {
  backToTheFutureCharacters: backToTheFutureCharacter[] = []
  constructor(private backToTheFutureCharactersService: backToTheFutureCharactersService, private audioService: AudioService ) {}


  ngOnInit(){
    this.backToTheFutureCharactersService.getbackToTheFutureCharacters().subscribe({
      next: (backToTheFutureCharacters: backToTheFutureCharacter[]) => {
        this.backToTheFutureCharacters = backToTheFutureCharacters
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

