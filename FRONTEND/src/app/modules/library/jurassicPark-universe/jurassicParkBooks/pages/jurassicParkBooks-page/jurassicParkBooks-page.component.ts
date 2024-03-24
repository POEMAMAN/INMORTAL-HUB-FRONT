import { AudioService } from './../../../../jurassicPark-universe/jurassicParkSoundtrack/soundtrack.service';
import { JurassicParkBook } from '../../interfaces/JurassicParkBooks.interface';
import { jurassicParkBooksService } from '../../services/jurassicParkBooks.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jurassicParkBooks-page',
  templateUrl: './jurassicParkBooks-page.component.html',
  styleUrls: ['./jurassicParkBooks-page.component.scss']
})
export class jurassicParkBooksPageComponent implements OnInit {
  jurassicParkBooks: JurassicParkBook[] = []
  constructor(private jurassicParkBooksService: jurassicParkBooksService, private audioService: AudioService ) {}


  ngOnInit(){
    this.jurassicParkBooksService.getJurassicParkBooks().subscribe({
      next: (jurassicParkBooks: JurassicParkBook[]) => {
        this.jurassicParkBooks = jurassicParkBooks
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
