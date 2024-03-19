import { CrepusculoBook } from '../../interfaces/CrepusculoBooks.interface';
import { crepusculoBooksService } from '../../services/crepusculoBooks.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crepusculoBooks-page',
  templateUrl: './crepusculoBooks-page.component.html',
  styleUrls: ['./crepusculoBooks-page.component.scss']
})
export class crepusculoBooksPageComponent implements OnInit {
  crepusculoBooks: CrepusculoBook[] = []
  constructor(private crepusculoBooksService: crepusculoBooksService ) {}


  ngOnInit(){
    this.crepusculoBooksService.getCrepusculoBooks().subscribe({
      next: (crepusculoBooks: CrepusculoBook[]) => {
        this.crepusculoBooks = crepusculoBooks
      },
      error: () => {}
    })
  }
  

}
