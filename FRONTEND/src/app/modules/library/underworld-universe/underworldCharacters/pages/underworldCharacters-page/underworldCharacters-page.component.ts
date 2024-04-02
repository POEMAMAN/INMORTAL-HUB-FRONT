
import { underworldCharacter } from '../../interfaces/underworldCharacters.interface';
import { underworldCharactersService } from '../../services/underworldCharacters.service';
import { Component, OnInit } from '@angular/core';
import { AudioService } from './../../../../underworld-universe/underworldSoundtrack/soundtrack.service';

@Component({
  selector: 'app-underworldCharacters-page',
  templateUrl: './underworldCharacters-page.component.html',
  styleUrls: ['./underworldCharacters-page.component.scss']
})
export class underworldCharactersPageComponent implements OnInit {
  underworldCharacters: underworldCharacter[] = []
  constructor(private underworldCharactersService: underworldCharactersService,private audioService: AudioService ) {}


  ngOnInit(){
    this.underworldCharactersService.getunderworldCharacters().subscribe({
      next: (underworldCharacters: underworldCharacter[]) => {
        this.underworldCharacters = underworldCharacters
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
}
