import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { residentEvilMoviesRoutingModule } from './residentEvilMovies-routing.module';
import { residentEvilMoviesPageComponent } from './pages/residentEvilMovies-page/residentEvilMovies-page.component';
import { residentEvilMoviesComponent } from './components/residentEvilMovies/residentEvilMovies.component';


@NgModule({
  declarations: [
    residentEvilMoviesPageComponent,
    residentEvilMoviesComponent
  ],
  imports: [
    CommonModule,
    residentEvilMoviesRoutingModule
  ]
})
export class residentEvilMoviesModule { }
