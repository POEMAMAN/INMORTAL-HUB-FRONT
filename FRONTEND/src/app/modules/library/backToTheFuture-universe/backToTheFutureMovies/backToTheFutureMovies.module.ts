import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { backToTheFutureMoviesPageComponent } from './pages/backToTheFutureMovies-page/backToTheFutureMovies-page.component';
import { backToTheFutureMoviesComponent } from './components/backToTheFutureMovies/backToTheFutureMovies.component';
import { backToTheFutureMoviesRoutingModule } from './backToTheFutureMovies-routing.module';


@NgModule({
  declarations: [
    backToTheFutureMoviesPageComponent,
    backToTheFutureMoviesComponent
  ],
  imports: [
    CommonModule,
    backToTheFutureMoviesRoutingModule
  ]
})
export class backToTheFutureMoviesModule { }
