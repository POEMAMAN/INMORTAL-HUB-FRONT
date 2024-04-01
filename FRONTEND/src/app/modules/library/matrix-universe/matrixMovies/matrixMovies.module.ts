import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { matrixMoviesPageComponent } from './pages/matrixMovies-page/matrixMovies-page.component';
import { matrixMoviesComponent } from './components/matrixMovies/matrixMovies.component';
import { matrixMoviesRoutingModule } from './matrixMovies-routing.module';


@NgModule({
  declarations: [
    matrixMoviesPageComponent,
    matrixMoviesComponent
  ],
  imports: [
    CommonModule,
    matrixMoviesRoutingModule
  ]
})
export class matrixMoviesModule { }
