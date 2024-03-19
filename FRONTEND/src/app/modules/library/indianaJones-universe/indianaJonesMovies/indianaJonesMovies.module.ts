import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { indianaJonesMoviesRoutingModule } from './indianaJonesMovies-routing.module';
import { indianaJonesMoviesPageComponent } from './pages/indianaJonesMovies-page/indianaJonesMovies-page.component';
import { indianaJonesMoviesComponent } from './components/indianaJonesMovies/indianaJonesMovies.component';


@NgModule({
  declarations: [
    indianaJonesMoviesPageComponent,
    indianaJonesMoviesComponent
  ],
  imports: [
    CommonModule,
    indianaJonesMoviesRoutingModule
  ]
})
export class indianaJonesMoviesModule { }
