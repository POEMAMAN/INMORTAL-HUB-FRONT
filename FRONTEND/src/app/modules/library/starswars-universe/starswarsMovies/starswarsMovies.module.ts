import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { starswarsMoviesRoutingModule } from './starswarsMovies-routing.module';
import { starswarsMoviesPageComponent } from './pages/starswarsMovies-page/starswarsMovies-page.component';
import { starswarsMoviesComponent } from './components/starswarsMovies/starswarsMovies.component';


@NgModule({
  declarations: [
    starswarsMoviesPageComponent,
    starswarsMoviesComponent
  ],
  imports: [
    CommonModule,
    starswarsMoviesRoutingModule
  ]
})
export class starswarsMoviesModule { }
