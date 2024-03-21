import { AudioService } from './../../../../dune-universe/duneSoundtrack/soundtrack.service';
import { DuneCharacter } from '../../interfaces/DuneCharacters.interface';
import { duneCharactersService } from '../../services/duneCharacters.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-duneCharacters-page',
  templateUrl: './duneCharacters-page.component.html',
  styleUrls: ['./duneCharacters-page.component.scss']
})
export class duneCharactersPageComponent implements OnInit {
  duneCharacters: DuneCharacter[] = []
  constructor(private duneCharactersService: duneCharactersService, private audioService: AudioService ) {}


  ngOnInit(){
    this.duneCharactersService.getDuneCharacters().subscribe({
      next: (duneCharacters: DuneCharacter[]) => {
        this.duneCharacters = duneCharacters
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
