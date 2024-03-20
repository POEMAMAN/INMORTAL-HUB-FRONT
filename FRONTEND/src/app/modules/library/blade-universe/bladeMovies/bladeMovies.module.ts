import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bladeMoviesPageComponent } from './pages/bladeMovies-page/bladeMovies-page.component';
import { bladeMoviesComponent } from './components/bladeMovies/bladeMovies.component';
import { bladeMoviesRoutingModule } from './bladeMovies-routing.module';


@NgModule({
  declarations: [
    bladeMoviesPageComponent,
    bladeMoviesComponent
  ],
  imports: [
    CommonModule,
    bladeMoviesRoutingModule
  ]
})
export class bladeMoviesModule { }
