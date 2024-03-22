
import { lordOfTheRingsMovie } from '../../interfaces/lordOfTheRingsMovies.interface';
import { lordOfTheRingsMoviesService } from '../../services/lordOfTheRingsMovies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lordOfTheRingsMovies-page',
  templateUrl: './lordOfTheRingsMovies-page.component.html',
  styleUrls: ['./lordOfTheRingsMovies-page.component.scss']
})
export class lordOfTheRingsMoviesPageComponent implements OnInit {
  lordOfTheRingsMovies: lordOfTheRingsMovie[] = []
  constructor(private lordOfTheRingsMoviesService: lordOfTheRingsMoviesService ) {}


  ngOnInit(){
    this.lordOfTheRingsMoviesService.getlordOfTheRingsMovies().subscribe({
      next: (lordOfTheRingsMovies: lordOfTheRingsMovie[]) => {
        this.lordOfTheRingsMovies = lordOfTheRingsMovies
      },
      error: () => {}
    })
  }

}
