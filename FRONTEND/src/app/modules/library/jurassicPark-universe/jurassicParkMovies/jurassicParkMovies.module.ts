import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { jurassicParkMoviesRoutingModule } from './jurassicParkMovies-routing.module';
import { jurassicParkMoviesPageComponent } from './pages/jurassicParkMovies-page/jurassicParkMovies-page.component';
import { jurassicParkMoviesComponent } from './components/jurassicParkMovies/jurassicParkMovies.component';


@NgModule({
  declarations: [
    jurassicParkMoviesPageComponent,
    jurassicParkMoviesComponent
  ],
  imports: [
    CommonModule,
    jurassicParkMoviesRoutingModule
  ]
})
export class jurassicParkMoviesModule { }
