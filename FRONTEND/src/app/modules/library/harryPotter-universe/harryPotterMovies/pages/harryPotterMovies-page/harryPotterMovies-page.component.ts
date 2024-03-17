
import { HarryPotterMovie } from '../../interfaces/HarryPotterMovies.interface';
import { harryPotterMoviesService } from '../../services/harryPotterMovies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-harryPotterMovies-page',
  templateUrl: './harryPotterMovies-page.component.html',
  styleUrls: ['./harryPotterMovies-page.component.scss']
})
export class harryPotterMoviesPageComponent implements OnInit {
  harryPotterMovies: HarryPotterMovie[] = []
  constructor(private harryPotterMoviesService: harryPotterMoviesService ) {}


  ngOnInit(){
    this.harryPotterMoviesService.getHarryPotterMovies().subscribe({
      next: (harryPotterMovies: HarryPotterMovie[]) => {
        this.harryPotterMovies = harryPotterMovies
      },
      error: () => {}
    })
  }

}
