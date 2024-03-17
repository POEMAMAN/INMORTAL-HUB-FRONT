import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { hungerGamesMoviesRoutingModule } from './hungerGamesMovies-routing.module';
import { hungerGamesMoviesPageComponent } from './pages/hungerGamesMovies-page/hungerGamesMovies-page.component';
import { hungerGamesMoviesComponent } from './components/hungerGamesMovies/hungerGamesMovies.component';


@NgModule({
  declarations: [
    hungerGamesMoviesPageComponent,
    hungerGamesMoviesComponent
  ],
  imports: [
    CommonModule,
    hungerGamesMoviesRoutingModule
  ]
})
export class hungerGamesMoviesModule { }
