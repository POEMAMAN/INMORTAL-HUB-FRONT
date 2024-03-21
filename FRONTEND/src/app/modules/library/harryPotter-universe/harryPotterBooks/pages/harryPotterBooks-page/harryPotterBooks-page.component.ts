import { harryPotterBooksService } from './../../services/harryPotterBooks.service';
import { HarryPotterBook } from '../../interfaces/HarryPotterBooks.interface';
import { AudioService } from '../../../harryPotterSoundtrack/soundtrack.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-harryPotterBooks-page',
  templateUrl: './harryPotterBooks-page.component.html',
  styleUrls: ['./harryPotterBooks-page.component.scss']
})
export class harryPotterBooksPageComponent implements OnInit {
  harryPotterBooks: HarryPotterBook[] = []
  constructor(private harryPotterBooksService: harryPotterBooksService,private audioService: AudioService  ) {}


  ngOnInit(){
    this.harryPotterBooksService.getHarryPotterBooks().subscribe({
      next: (harryPotterBooks: HarryPotterBook[]) => {
        this.harryPotterBooks = harryPotterBooks
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