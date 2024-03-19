import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { apesPlanetMoviesPageComponent } from './pages/apesPlanetMovies-page/apesPlanetMovies-page.component';
import { apesPlanetMoviesComponent } from './components/apesPlanetMovies/apesPlanetMovies.component';
import { apesPlanetMoviesRoutingModule } from './apesPlanetMovies-routing.module';


@NgModule({
  declarations: [
    apesPlanetMoviesPageComponent,
    apesPlanetMoviesComponent
  ],
  imports: [
    CommonModule,
    apesPlanetMoviesRoutingModule
  ]
})
export class apesPlanetMoviesModule { }
