
import { IndianaJonesMovie } from '../../interfaces/IndianaJonesMovies.interface';
import { indianaJonesMoviesService } from '../../services/indianaJonesMovies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-indianaJonesMovies-page',
  templateUrl: './indianaJonesMovies-page.component.html',
  styleUrls: ['./indianaJonesMovies-page.component.scss']
})
export class indianaJonesMoviesPageComponent implements OnInit {
  indianaJonesMovies: IndianaJonesMovie[] = []
  constructor(private indianaJonesMoviesService: indianaJonesMoviesService ) {}


  ngOnInit(){
    this.indianaJonesMoviesService.getIndianaJonesMovies().subscribe({
      next: (indianaJonesMovies: IndianaJonesMovie[]) => {
        this.indianaJonesMovies = indianaJonesMovies
      },
      error: () => {}
    })
  }

}
