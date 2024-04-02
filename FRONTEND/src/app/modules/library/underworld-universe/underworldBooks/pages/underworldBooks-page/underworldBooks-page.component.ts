import { underworldBooksService } from './../../services/underworldBooks.service';
import { underworldBook } from '../../interfaces/underworldBooks.interface';
import { Component, OnInit } from '@angular/core';
import { AudioService } from './../../../../dune-universe/duneSoundtrack/soundtrack.service';

@Component({
  selector: 'app-underworldBooks-page',
  templateUrl: './underworldBooks-page.component.html',
  styleUrls: ['./underworldBooks-page.component.scss']
})
export class underworldBooksPageComponent implements OnInit {
  underworldBooks: underworldBook[] = []
  constructor(private underworldBooksService: underworldBooksService,private audioService: AudioService  ) {}


  ngOnInit(){
    this.underworldBooksService.getunderworldBooks().subscribe({
      next: (underworldBooks: underworldBook[]) => {
        this.underworldBooks = underworldBooks
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
