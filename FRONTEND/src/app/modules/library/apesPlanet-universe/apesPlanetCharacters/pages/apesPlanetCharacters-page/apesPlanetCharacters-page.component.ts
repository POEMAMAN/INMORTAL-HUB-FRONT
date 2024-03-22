import { ApesPlanetCharacter } from '../../interfaces/ApesPlanetCharacters.interface';
import { apesPlanetCharactersService } from '../../services/apesPlanetCharacters.service';
import { Component, OnInit } from '@angular/core';
import { AudioService } from '../../../apesPlanetSoundtrack/soundtrack.service';

@Component({
  selector: 'app-apesPlanetCharacters-page',
  templateUrl: './apesPlanetCharacters-page.component.html',
  styleUrls: ['./apesPlanetCharacters-page.component.scss']
})
export class apesPlanetCharactersPageComponent implements OnInit {
  apesPlanetCharacters: ApesPlanetCharacter[] = []
  constructor(private apesPlanetCharactersService: apesPlanetCharactersService, private audioService: AudioService ) {}


  ngOnInit(){
    this.apesPlanetCharactersService.getApesPlanetCharacters().subscribe({
      next: (apesPlanetCharacters: ApesPlanetCharacter[]) => {
        this.apesPlanetCharacters = apesPlanetCharacters
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
