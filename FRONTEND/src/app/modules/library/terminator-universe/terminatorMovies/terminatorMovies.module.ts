import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { terminatorMoviesPageComponent } from './pages/terminatorMovies-page/terminatorMovies-page.component';
import { terminatorMoviesComponent } from './components/terminatorMovies/terminatorMovies.component';
import { terminatorMoviesRoutingModule } from './terminatorMovies-routing.module';


@NgModule({
  declarations: [
    terminatorMoviesPageComponent,
    terminatorMoviesComponent
  ],
  imports: [
    CommonModule,
    terminatorMoviesRoutingModule
  ]
})
export class terminatorMoviesModule { }
