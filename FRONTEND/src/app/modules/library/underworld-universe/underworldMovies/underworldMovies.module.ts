import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { underworldMoviesRoutingModule } from './underworldMovies-routing.module';
import { underworldMoviesPageComponent } from './pages/underworldMovies-page/underworldMovies-page.component';
import { underworldMoviesComponent } from './components/underworldMovies/underworldMovies.component';


@NgModule({
  declarations: [
    underworldMoviesPageComponent,
    underworldMoviesComponent
  ],
  imports: [
    CommonModule,
    underworldMoviesRoutingModule
  ]
})
export class underworldMoviesModule { }
