import { xmenCharacter } from '../../interfaces/xmenCharacters.interface';
import { xmenCharactersService } from '../../services/xmenCharacters.service';
import { Component, OnInit } from '@angular/core';
import { AudioService } from '../../../xmenSoundtrack/soundtrack.service';

@Component({
  selector: 'app-xmenCharacters-page',
  templateUrl: './xmenCharacters-page.component.html',
  styleUrls: ['./xmenCharacters-page.component.scss']
})
export class xmenCharactersPageComponent implements OnInit {
  xmenCharacters: xmenCharacter[] = []
  constructor(private xmenCharactersService: xmenCharactersService, private audioService: AudioService ) {}


  ngOnInit(){
    this.xmenCharactersService.getxmenCharacters().subscribe({
      next: (xmenCharacters: xmenCharacter[]) => {
        this.xmenCharacters = xmenCharacters
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

