import { CrepusculoCharacter } from '../../interfaces/crepusculoCharacters.interface';
import { crepusculoCharactersService } from '../../services/crepusculoCharacters.service';
import { Component, OnInit } from '@angular/core';
import { AudioService } from '../../../crepusculoSoundtrack/soundtrack.service';

@Component({
  selector: 'app-crepusculoCharacters-page',
  templateUrl: './crepusculoCharacters-page.component.html',
  styleUrls: ['./crepusculoCharacters-page.component.scss']
})
export class crepusculoCharactersPageComponent implements OnInit {
  crepusculoCharacters: CrepusculoCharacter[] = []
  constructor(private crepusculoCharactersService: crepusculoCharactersService,private audioService: AudioService ) {}


  ngOnInit(){
    this.crepusculoCharactersService.getCrepusculoCharacters().subscribe({
      next: (crepusculoCharacters: CrepusculoCharacter[]) => {
        this.crepusculoCharacters = crepusculoCharacters
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
