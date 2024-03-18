import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { harryPotterMoviesRoutingModule } from './harryPotterMovies-routing.module';
import { harryPotterMoviesPageComponent } from './pages/harryPotterMovies-page/harryPotterMovies-page.component';
import { harryPotterMoviesComponent } from './components/harryPotterMovies/harryPotterMovies.component';


@NgModule({
  declarations: [
    harryPotterMoviesPageComponent,
    harryPotterMoviesComponent
  ],
  imports: [
    CommonModule,
    harryPotterMoviesRoutingModule
  ]
})
export class harryPotterMoviesModule { }
