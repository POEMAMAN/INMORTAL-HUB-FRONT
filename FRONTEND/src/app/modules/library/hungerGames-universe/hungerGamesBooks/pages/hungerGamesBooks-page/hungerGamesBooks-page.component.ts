import { HungerGamesBook } from '../../interfaces/HungerGamesBooks.interface';
import { hungerGamesBooksService } from '../../services/hungerGamesBooks.service';
import { Component, OnInit } from '@angular/core';
import { AudioService } from '../../../hungerGamesSoundtrack/soundtrack.service';

@Component({
  selector: 'app-hungerGamesBooks-page',
  templateUrl: './hungerGamesBooks-page.component.html',
  styleUrls: ['./hungerGamesBooks-page.component.scss']
})
export class hungerGamesBooksPageComponent implements OnInit {
  hungerGamesBooks: HungerGamesBook[] = []
  constructor(private hungerGamesBooksService: hungerGamesBooksService,private audioService: AudioService ) {}


  ngOnInit(){
    this.hungerGamesBooksService.getHungerGamesBooks().subscribe({
      next: (hungerGamesBooks: HungerGamesBook[]) => {
        this.hungerGamesBooks = hungerGamesBooks
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
