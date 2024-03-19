import { starWarsBook } from '../../interfaces/starWarsBooks.interface';
import { starWarsBooksService } from '../../services/starWarsBooks.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-starWarsBooks-page',
  templateUrl: './starWarsBooks-page.component.html',
  styleUrls: ['./starWarsBooks-page.component.scss']
})
export class starWarsBooksPageComponent implements OnInit {
  starWarsBooks: starWarsBook[] = []
  constructor(private starWarsBooksService: starWarsBooksService ) {}

  ngOnInit(){
    this.starWarsBooksService.getstarWarsBooks().subscribe({
      next: (starWarsBooks: starWarsBook[]) => {
        this.starWarsBooks = starWarsBooks
      },
      error: () => {}
    })
  }
  

}
