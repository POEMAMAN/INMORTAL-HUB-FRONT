import { transformersCharacter } from '../../interfaces/transformersCharacters.interface';
import { transformersCharactersService } from '../../services/transformersCharacters.service';
import { Component, OnInit } from '@angular/core';
import { AudioService } from '../../../transformersSoundtrack/soundtrack.service';

@Component({
  selector: 'app-transformersCharacters-page',
  templateUrl: './transformersCharacters-page.component.html',
  styleUrls: ['./transformersCharacters-page.component.scss']
})
export class transformersCharactersPageComponent implements OnInit {
  transformersCharacters: transformersCharacter[] = []
  constructor(private transformersCharactersService: transformersCharactersService, private audioService: AudioService ) {}


  ngOnInit(){
    this.transformersCharactersService.gettransformersCharacters().subscribe({
      next: (transformersCharacters: transformersCharacter[]) => {
        this.transformersCharacters = transformersCharacters
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

