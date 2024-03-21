import { MissionImposibleCharacter } from '../../interfaces/MissionImposibleCharacters.interface';
import { missionImposibleCharactersService } from '../../services/missionImposibleCharacters.service';
import { Component, OnInit } from '@angular/core';
import { AudioService } from '../../../missionImposibleSoundtrack/soundtrack.service';

@Component({
  selector: 'app-missionImposibleCharacters-page',
  templateUrl: './missionImposibleCharacters-page.component.html',
  styleUrls: ['./missionImposibleCharacters-page.component.scss']
})
export class missionImposibleCharactersPageComponent implements OnInit {
  missionImposibleCharacters: MissionImposibleCharacter[] = []
  constructor(private missionImposibleCharactersService: missionImposibleCharactersService, private audioService: AudioService ) {}


  ngOnInit(){
    this.missionImposibleCharactersService.getMissionImposibleCharacters().subscribe({
      next: (missionImposibleCharacters: MissionImposibleCharacter[]) => {
        this.missionImposibleCharacters = missionImposibleCharacters
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
