import { lordOfTheRingsCharacter } from '../../interfaces/lordOfTheRingsCharacters.interface';
import { lordOfTheRingsCharactersService } from '../../services/lordOfTheRingsCharacters.service';
import { Component, OnInit } from '@angular/core';
import { AudioService } from './../../../../dune-universe/duneSoundtrack/soundtrack.service';

@Component({
  selector: 'app-lordOfTheRingsCharacters-page',
  templateUrl: './lordOfTheRingsCharacters-page.component.html',
  styleUrls: ['./lordOfTheRingsCharacters-page.component.scss']
})
export class lordOfTheRingsCharactersPageComponent implements OnInit {
  lordOfTheRingsCharacters: lordOfTheRingsCharacter[] = []
  constructor(private lordOfTheRingsCharactersService: lordOfTheRingsCharactersService,private audioService: AudioService ) {}


  ngOnInit(){
    this.lordOfTheRingsCharactersService.getlordOfTheRingsCharacters().subscribe({
      next: (lordOfTheRingsCharacters: lordOfTheRingsCharacter[]) => {
        this.lordOfTheRingsCharacters = lordOfTheRingsCharacters
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
