import { starWarsCharacter } from '../../interfaces/starWarsCharacters.interface';
import { starWarsCharactersService } from '../../services/starWarsCharacters.service';
import { Component, OnInit } from '@angular/core';
import { AudioService } from '../../../starWarsSoundtrack/soundtrack.service';

@Component({
  selector: 'app-starWarsCharacters-page',
  templateUrl: './starWarsCharacters-page.component.html',
  styleUrls: ['./starWarsCharacters-page.component.scss']
})
export class starWarsCharactersPageComponent implements OnInit {
  starWarsCharacters: starWarsCharacter[] = []
  constructor(private starWarsCharactersService: starWarsCharactersService, private audioService: AudioService ) {}


  ngOnInit(){
    this.starWarsCharactersService.getstarWarsCharacters().subscribe({
      next: (starWarsCharacters: starWarsCharacter[]) => {
        this.starWarsCharacters = starWarsCharacters
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
