import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { starWarsMoviesRoutingModule } from './starWarsMovies-routing.module';
import { starWarsMoviesPageComponent } from './pages/starWarsMovies-page/starWarsMovies-page.component';
import { starWarsMoviesComponent } from './components/starWarsMovies/starWarsMovies.component';


@NgModule({
  declarations: [
    starWarsMoviesPageComponent,
    starWarsMoviesComponent
  ],
  imports: [
    CommonModule,
    starWarsMoviesRoutingModule
  ]
})
export class starWarsMoviesModule { }
