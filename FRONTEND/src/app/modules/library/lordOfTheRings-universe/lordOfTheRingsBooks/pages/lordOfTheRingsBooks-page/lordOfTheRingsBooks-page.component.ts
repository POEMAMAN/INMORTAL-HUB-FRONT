import { lordOfTheRingsBook } from '../../interfaces/lordOfTheRingsBooks.interface';
import { lordOfTheRingsBooksService } from '../../services/lordOfTheRingsBooks.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lordOfTheRingsBooks-page',
  templateUrl: './lordOfTheRingsBooks-page.component.html',
  styleUrls: ['./lordOfTheRingsBooks-page.component.scss']
})
export class lordOfTheRingsBooksPageComponent implements OnInit {
  lordOfTheRingsBooks: lordOfTheRingsBook[] = []
  constructor(private lordOfTheRingsBooksService: lordOfTheRingsBooksService ) {}


  ngOnInit(){
    this.lordOfTheRingsBooksService.getlordOfTheRingsBooks().subscribe({
      next: (lordOfTheRingsBooks: lordOfTheRingsBook[]) => {
        this.lordOfTheRingsBooks = lordOfTheRingsBooks
      },
      error: () => {}
    })
  }
  

}
