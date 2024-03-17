import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { duneMoviesRoutingModule } from './duneMovies-routing.module';
import { duneMoviesPageComponent } from './pages/duneMovies-page/duneMovies-page.component';
import { duneMoviesComponent } from './components/duneMovies/duneMovies.component';


@NgModule({
  declarations: [
    duneMoviesPageComponent,
    duneMoviesComponent
  ],
  imports: [
    CommonModule,
    duneMoviesRoutingModule
  ]
})
export class duneMoviesModule { }
