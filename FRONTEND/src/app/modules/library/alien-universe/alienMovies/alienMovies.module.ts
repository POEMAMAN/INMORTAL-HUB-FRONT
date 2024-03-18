import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { alienMoviesPageComponent } from './pages/alienMovies-page/alienMovies-page.component';
import { alienMoviesComponent } from './components/alienMovies/alienMovies.component';
import { alienMoviesRoutingModule } from './alienMovies-routing.module';


@NgModule({
  declarations: [
    alienMoviesPageComponent,
    alienMoviesComponent
  ],
  imports: [
    CommonModule,
    alienMoviesRoutingModule
  ]
})
export class alienMoviesModule { }
