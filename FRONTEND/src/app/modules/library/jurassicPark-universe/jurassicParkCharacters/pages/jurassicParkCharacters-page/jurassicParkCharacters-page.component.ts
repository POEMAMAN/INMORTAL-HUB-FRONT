import { AudioService } from './../../../../jurassicPark-universe/jurassicParkSoundtrack/soundtrack.service';
import { JurassicParkCharacter } from '../../interfaces/JurassicParkCharacters.interface';
import { jurassicParkCharactersService } from '../../services/jurassicParkCharacters.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jurassicParkCharacters-page',
  templateUrl: './jurassicParkCharacters-page.component.html',
  styleUrls: ['./jurassicParkCharacters-page.component.scss']
})
export class jurassicParkCharactersPageComponent implements OnInit {
  jurassicParkCharacters: JurassicParkCharacter[] = []
  constructor(private jurassicParkCharactersService: jurassicParkCharactersService, private audioService: AudioService ) {}


  ngOnInit(){
    this.jurassicParkCharactersService.getJurassicParkCharacters().subscribe({
      next: (jurassicParkCharacters: JurassicParkCharacter[]) => {
        this.jurassicParkCharacters = jurassicParkCharacters
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
