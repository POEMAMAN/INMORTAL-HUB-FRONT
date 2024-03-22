import { HungerGamesCharacter } from '../../interfaces/HungerGamesCharacters.interface';
import { hungerGamesCharactersService } from '../../services/hungerGamesCharacters.service';
import { Component, OnInit } from '@angular/core';
import { AudioService } from '../../../hungerGamesSoundtrack/soundtrack.service';

@Component({
  selector: 'app-hungerGamesCharacters-page',
  templateUrl: './hungerGamesCharacters-page.component.html',
  styleUrls: ['./hungerGamesCharacters-page.component.scss']
})
export class hungerGamesCharactersPageComponent implements OnInit {
  hungerGamesCharacters: HungerGamesCharacter[] = []
  constructor(private hungerGamesCharactersService: hungerGamesCharactersService,private audioService: AudioService  ) {}


  ngOnInit(){
    this.hungerGamesCharactersService.getHungerGamesCharacters().subscribe({
      next: (hungerGamesCharacters: HungerGamesCharacter[]) => {
        this.hungerGamesCharacters = hungerGamesCharacters
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
