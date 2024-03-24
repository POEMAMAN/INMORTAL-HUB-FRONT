import { AudioService } from './../../../../starTrek-universe/starTrekSoundtrack/soundtrack.service';
import { StarTrekBook } from '../../interfaces/StarTrekBooks.interface';
import { starTrekBooksService } from '../../services/starTrekBooks.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-starTrekBooks-page',
  templateUrl: './starTrekBooks-page.component.html',
  styleUrls: ['./starTrekBooks-page.component.scss']
})
export class starTrekBooksPageComponent implements OnInit {
  starTrekBooks: StarTrekBook[] = []
  constructor(private starTrekBooksService: starTrekBooksService, private audioService: AudioService ) {}


  ngOnInit(){
    this.starTrekBooksService.getStarTrekBooks().subscribe({
      next: (starTrekBooks: StarTrekBook[]) => {
        this.starTrekBooks = starTrekBooks
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
