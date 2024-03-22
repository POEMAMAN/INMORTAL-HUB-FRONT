import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { lordOfTheRingsMoviesRoutingModule } from './lordOfTheRingsMovies-routing.module';
import { lordOfTheRingsMoviesPageComponent } from './pages/lordOfTheRingsMovies-page/lordOfTheRingsMovies-page.component';
import { lordOfTheRingsMoviesComponent } from './components/lordOfTheRingsMovies/lordOfTheRingsMovies.component';


@NgModule({
  declarations: [
    lordOfTheRingsMoviesPageComponent,
    lordOfTheRingsMoviesComponent
  ],
  imports: [
    CommonModule,
    lordOfTheRingsMoviesRoutingModule
  ]
})
export class lordOfTheRingsMoviesModule { }
