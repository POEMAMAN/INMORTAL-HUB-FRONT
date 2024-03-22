import { AudioService } from './../../../../indianaJones-universe/indianaJonesSoundtrack/soundtrack.service';
import { IndianaJonesBook } from '../../interfaces/IndianaJonesBooks.interface';
import { indianaJonesBooksService } from '../../services/indianaJonesBooks.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-indianaJonesBooks-page',
  templateUrl: './indianaJonesBooks-page.component.html',
  styleUrls: ['./indianaJonesBooks-page.component.scss']
})
export class indianaJonesBooksPageComponent implements OnInit {
  indianaJonesBooks: IndianaJonesBook[] = []
  constructor(private indianaJonesBooksService: indianaJonesBooksService, private audioService: AudioService ) {}


  ngOnInit(){
    this.indianaJonesBooksService.getIndianaJonesBooks().subscribe({
      next: (indianaJonesBooks: IndianaJonesBook[]) => {
        this.indianaJonesBooks = indianaJonesBooks
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
