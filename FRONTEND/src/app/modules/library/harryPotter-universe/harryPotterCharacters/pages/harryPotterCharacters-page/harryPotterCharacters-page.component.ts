import { HarryPotterCharacter } from '../../interfaces/HarryPotterCharacters.interface';
import { harryPotterCharactersService } from '../../services/harryPotterCharacters.service';
import { Component, OnInit } from '@angular/core';
import { AudioService } from '../../../harryPotterSoundtrack/soundtrack.service';

@Component({
  selector: 'app-harryPotterCharacters-page',
  templateUrl: './harryPotterCharacters-page.component.html',
  styleUrls: ['./harryPotterCharacters-page.component.scss']
})
export class harryPotterCharactersPageComponent implements OnInit {
  harryPotterCharacters: HarryPotterCharacter[] = []
  constructor(private harryPotterCharactersService: harryPotterCharactersService,private audioService: AudioService  ) {}


  ngOnInit(){
    this.harryPotterCharactersService.getHarryPotterCharacters().subscribe({
      next: (harryPotterCharacters: HarryPotterCharacter[]) => {
        this.harryPotterCharacters = harryPotterCharacters
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
