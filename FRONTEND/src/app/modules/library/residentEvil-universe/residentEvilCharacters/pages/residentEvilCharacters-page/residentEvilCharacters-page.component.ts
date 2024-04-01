import { residentEvilCharacter } from '../../interfaces/residentEvilCharacters.interface';
import { residentEvilCharactersService } from '../../services/residentEvilCharacters.service';
import { Component, OnInit } from '@angular/core';
import { AudioService } from '../../../residentEvilSoundtrack/soundtrack.service';

@Component({
  selector: 'app-residentEvilCharacters-page',
  templateUrl: './residentEvilCharacters-page.component.html',
  styleUrls: ['./residentEvilCharacters-page.component.scss']
})
export class residentEvilCharactersPageComponent implements OnInit {
  residentEvilCharacters: residentEvilCharacter[] = []
  constructor(private residentEvilCharactersService: residentEvilCharactersService, private audioService: AudioService ) {}


  ngOnInit(){
    this.residentEvilCharactersService.getresidentEvilCharacters().subscribe({
      next: (residentEvilCharacters: residentEvilCharacter[]) => {
        this.residentEvilCharacters = residentEvilCharacters
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

