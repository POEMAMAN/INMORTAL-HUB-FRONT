import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { crepusculoMoviesRoutingModule } from './crepusculoMovies-routing.module';
import { crepusculoMoviesPageComponent } from './pages/crepusculoMovies-page/crepusculoMovies-page.component';
import { crepusculoMoviesComponent } from './components/crepusculoMovies/crepusculoMovies.component';


@NgModule({
  declarations: [
    crepusculoMoviesPageComponent,
    crepusculoMoviesComponent
  ],
  imports: [
    CommonModule,
    crepusculoMoviesRoutingModule
  ]
})
export class crepusculoMoviesModule { }
