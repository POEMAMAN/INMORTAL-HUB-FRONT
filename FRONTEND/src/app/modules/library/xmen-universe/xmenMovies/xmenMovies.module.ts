import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { xmenMoviesRoutingModule } from './xmenMovies-routing.module';
import { xmenMoviesComponent } from './components/xmenMovies/xmenMovies.component';
import { xmenMoviesPageComponent } from './pages/xmenMovies-page/xmenMovies-page.component';


@NgModule({
  declarations: [
    xmenMoviesPageComponent,
    xmenMoviesComponent
  ],
  imports: [
    CommonModule,
    // xmenMoviesRoutingModule
  ]
})
export class xmenMoviesModule { }
