import { starswarsBook } from '../../interfaces/starswarsBooks.interface';
import { starswarsBooksService } from '../../services/starswarsBooks.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-starswarsBooks-page',
  templateUrl: './starswarsBooks-page.component.html',
  styleUrls: ['./starswarsBooks-page.component.scss']
})
export class starswarsBooksPageComponent implements OnInit {
  starswarsBooks: starswarsBook[] = []
  constructor(private starswarsBooksService: starswarsBooksService ) {}

  ngOnInit(){
    this.starswarsBooksService.getstarswarsBooks().subscribe({
      next: (starswarsBooks: starswarsBook[]) => {
        this.starswarsBooks = starswarsBooks
      },
      error: () => {}
    })
  }
  

}
