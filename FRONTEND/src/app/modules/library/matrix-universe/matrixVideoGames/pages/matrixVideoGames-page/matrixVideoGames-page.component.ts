import { MatrixVideoGames } from '../../interfaces/MatrixVideoGames.interface';
import { matrixVideoGamesService } from '../../services/matrixVideoGames.service';
import { Component, OnInit } from '@angular/core';
import { AudioService } from '../../../matrixSoundtrack/soundtrack.service';

@Component({
  selector: 'app-matrixVideoGames-page',
  templateUrl: './matrixVideoGames-page.component.html',
  styleUrls: ['./matrixVideoGames-page.component.scss']
})
export class matrixVideoGamesPageComponent implements OnInit {
  matrixVideoGames: MatrixVideoGames[] = []
  constructor(private matrixVideoGamesService: matrixVideoGamesService,private audioService: AudioService ) {}


  ngOnInit(){
    this.matrixVideoGamesService.getMatrixVideoGames().subscribe({
      next: (matrixVideoGames: MatrixVideoGames[]) => {
        this.matrixVideoGames = matrixVideoGames
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
