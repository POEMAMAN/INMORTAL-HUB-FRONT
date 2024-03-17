import { HungerGamesBook } from '../../interfaces/HungerGamesBooks.interface';
import { hungerGamesBooksService } from '../../services/hungerGamesBooks.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hungerGamesBooks-page',
  templateUrl: './hungerGamesBooks-page.component.html',
  styleUrls: ['./hungerGamesBooks-page.component.scss']
})
export class hungerGamesBooksPageComponent implements OnInit {
  hungerGamesBooks: HungerGamesBook[] = []
  constructor(private hungerGamesBooksService: hungerGamesBooksService ) {}


  ngOnInit(){
    this.hungerGamesBooksService.getHungerGamesBooks().subscribe({
      next: (hungerGamesBooks: HungerGamesBook[]) => {
        this.hungerGamesBooks = hungerGamesBooks
      },
      error: () => {}
    })
  }
  

}
