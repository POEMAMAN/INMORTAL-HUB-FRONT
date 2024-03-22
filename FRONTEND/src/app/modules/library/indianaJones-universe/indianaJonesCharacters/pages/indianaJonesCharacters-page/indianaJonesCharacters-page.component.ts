import { AudioService } from './../../../../indianaJones-universe/indianaJonesSoundtrack/soundtrack.service';
import { IndianaJonesCharacter } from '../../interfaces/IndianaJonesCharacters.interface';
import { indianaJonesCharactersService } from '../../services/indianaJonesCharacters.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-indianaJonesCharacters-page',
  templateUrl: './indianaJonesCharacters-page.component.html',
  styleUrls: ['./indianaJonesCharacters-page.component.scss']
})
export class indianaJonesCharactersPageComponent implements OnInit {
  indianaJonesCharacters: IndianaJonesCharacter[] = []
  constructor(private indianaJonesCharactersService: indianaJonesCharactersService, private audioService: AudioService ) {}


  ngOnInit(){
    this.indianaJonesCharactersService.getIndianaJonesCharacters().subscribe({
      next: (indianaJonesCharacters: IndianaJonesCharacter[]) => {
        this.indianaJonesCharacters = indianaJonesCharacters
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
