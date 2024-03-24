import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { starTrekMoviesRoutingModule } from './starTrekMovies-routing.module';
import { starTrekMoviesPageComponent } from './pages/starTrekMovies-page/starTrekMovies-page.component';
import { starTrekMoviesComponent } from './components/starTrekMovies/starTrekMovies.component';


@NgModule({
  declarations: [
    starTrekMoviesPageComponent,
    starTrekMoviesComponent
  ],
  imports: [
    CommonModule,
    starTrekMoviesRoutingModule
  ]
})
export class starTrekMoviesModule { }
