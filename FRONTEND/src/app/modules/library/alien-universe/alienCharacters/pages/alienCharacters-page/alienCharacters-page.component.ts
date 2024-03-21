import { AlienCharacter } from '../../interfaces/AlienCharacters.interface';
import { alienCharactersService } from '../../services/alienCharacters.service';
import { Component, OnInit } from '@angular/core';
import { AudioService } from '../../../alienSoundtrack/soundtrack.service';

@Component({
  selector: 'app-alienCharacters-page',
  templateUrl: './alienCharacters-page.component.html',
  styleUrls: ['./alienCharacters-page.component.scss']
})
export class alienCharactersPageComponent implements OnInit {
  alienCharacters: AlienCharacter[] = []
  constructor(private alienCharactersService: alienCharactersService, private audioService: AudioService ) {}


  ngOnInit(){
    this.alienCharactersService.getAlienCharacters().subscribe({
      next: (alienCharacters: AlienCharacter[]) => {
        this.alienCharacters = alienCharacters
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

