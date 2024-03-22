import { lordOfTheRingsBook } from '../../interfaces/lordOfTheRingsBooks.interface';
import { lordOfTheRingsBooksService } from '../../services/lordOfTheRingsBooks.service';
import { Component, OnInit } from '@angular/core';
import { AudioService } from './../../../../dune-universe/duneSoundtrack/soundtrack.service';

@Component({
  selector: 'app-lordOfTheRingsBooks-page',
  templateUrl: './lordOfTheRingsBooks-page.component.html',
  styleUrls: ['./lordOfTheRingsBooks-page.component.scss']
})
export class lordOfTheRingsBooksPageComponent implements OnInit {
  lordOfTheRingsBooks: lordOfTheRingsBook[] = []
  constructor(private lordOfTheRingsBooksService: lordOfTheRingsBooksService,private audioService: AudioService  ) {}


  ngOnInit(){
    this.lordOfTheRingsBooksService.getlordOfTheRingsBooks().subscribe({
      next: (lordOfTheRingsBooks: lordOfTheRingsBook[]) => {
        this.lordOfTheRingsBooks = lordOfTheRingsBooks
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
