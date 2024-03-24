import { TerminatorCharacter } from '../../interfaces/TerminatorCharacters.interface';
import { terminatorCharactersService } from '../../services/terminatorCharacters.service';
import { Component, OnInit } from '@angular/core';
import { AudioService } from '../../../terminatorSoundtrack/soundtrack.service';

@Component({
  selector: 'app-terminatorCharacters-page',
  templateUrl: './terminatorCharacters-page.component.html',
  styleUrls: ['./terminatorCharacters-page.component.scss']
})
export class terminatorCharactersPageComponent implements OnInit {
  terminatorCharacters: TerminatorCharacter[] = []
  constructor(private terminatorCharactersService: terminatorCharactersService, private audioService: AudioService ) {}


  ngOnInit(){
    this.terminatorCharactersService.getTerminatorCharacters().subscribe({
      next: (terminatorCharacters: TerminatorCharacter[]) => {
        this.terminatorCharacters = terminatorCharacters
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
