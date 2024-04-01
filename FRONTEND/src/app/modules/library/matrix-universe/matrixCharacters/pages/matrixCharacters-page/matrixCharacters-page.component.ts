import { MatrixCharacter } from '../../interfaces/MatrixCharacters.interface';
import { matrixCharactersService } from '../../services/matrixCharacters.service';
import { Component, OnInit } from '@angular/core';
import { AudioService } from '../../../matrixSoundtrack/soundtrack.service';

@Component({
  selector: 'app-matrixCharacters-page',
  templateUrl: './matrixCharacters-page.component.html',
  styleUrls: ['./matrixCharacters-page.component.scss']
})
export class matrixCharactersPageComponent implements OnInit {
  matrixCharacters: MatrixCharacter[] = []
  constructor(private matrixCharactersService: matrixCharactersService, private audioService: AudioService ) {}


  ngOnInit(){
    this.matrixCharactersService.getMatrixCharacters().subscribe({
      next: (matrixCharacters: MatrixCharacter[]) => {
        this.matrixCharacters = matrixCharacters
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
