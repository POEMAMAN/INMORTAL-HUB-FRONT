import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { transformersMoviesRoutingModule } from './transformersMovies-routing.module';
import { transformersMoviesPageComponent } from './pages/transformersMovies-page/transformersMovies-page.component';
import { transformersMoviesComponent } from './components/transformersMovies/transformersMovies.component';


@NgModule({
  declarations: [
    transformersMoviesPageComponent,
    transformersMoviesComponent
  ],
  imports: [
    CommonModule,
    transformersMoviesRoutingModule
  ]
})
export class transformersMoviesModule { }
