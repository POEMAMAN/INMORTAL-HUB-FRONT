
import { BladeMovie } from '../../interfaces/BladeMovies.interface';
import { bladeMoviesService } from '../../services/bladeMovies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bladeMovies-page',
  templateUrl: './bladeMovies-page.component.html',
  styleUrls: ['./bladeMovies-page.component.scss']
})
export class bladeMoviesPageComponent implements OnInit {
  bladeMovies: BladeMovie[] = []
  constructor(private bladeMoviesService: bladeMoviesService ) {}


  ngOnInit(){
    this.bladeMoviesService.getBladeMovies().subscribe({
      next: (bladeMovies: BladeMovie[]) => {
        this.bladeMovies = bladeMovies
      },
      error: () => {}
    })
  }

}
