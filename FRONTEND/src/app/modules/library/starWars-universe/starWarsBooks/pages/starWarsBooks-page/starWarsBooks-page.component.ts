import { starWarsBook } from '../../interfaces/starWarsBooks.interface';
import { starWarsBooksService } from '../../services/starWarsBooks.service';
import { Component, OnInit } from '@angular/core';
import { AudioService } from '../../../starWarsSoundtrack/soundtrack.service';

@Component({
  selector: 'app-starWarsBooks-page',
  templateUrl: './starWarsBooks-page.component.html',
  styleUrls: ['./starWarsBooks-page.component.scss']
})
export class starWarsBooksPageComponent implements OnInit {
  starWarsBooks: starWarsBook[] = []
  constructor(private starWarsBooksService: starWarsBooksService, private audioService: AudioService  ) {}

  ngOnInit(){
    this.starWarsBooksService.getstarWarsBooks().subscribe({
      next: (starWarsBooks: starWarsBook[]) => {
        this.starWarsBooks = starWarsBooks
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
