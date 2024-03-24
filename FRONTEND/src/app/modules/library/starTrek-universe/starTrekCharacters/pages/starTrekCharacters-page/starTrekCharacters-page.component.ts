import { AudioService } from './../../../../starTrek-universe/starTrekSoundtrack/soundtrack.service';
import { StarTrekCharacter } from '../../interfaces/StarTrekCharacters.interface';
import { starTrekCharactersService } from '../../services/starTrekCharacters.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-starTrekCharacters-page',
  templateUrl: './starTrekCharacters-page.component.html',
  styleUrls: ['./starTrekCharacters-page.component.scss']
})
export class starTrekCharactersPageComponent implements OnInit {
  starTrekCharacters: StarTrekCharacter[] = []
  constructor(private starTrekCharactersService: starTrekCharactersService, private audioService: AudioService ) {}


  ngOnInit(){
    this.starTrekCharactersService.getStarTrekCharacters().subscribe({
      next: (starTrekCharacters: StarTrekCharacter[]) => {
        this.starTrekCharacters = starTrekCharacters
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
