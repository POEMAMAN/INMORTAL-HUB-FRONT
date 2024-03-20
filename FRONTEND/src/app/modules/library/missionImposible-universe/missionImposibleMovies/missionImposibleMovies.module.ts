import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { missionImposibleMoviesPageComponent } from './pages/missionImposibleMovies-page/missionImposibleMovies-page.component';
import { missionImposibleMoviesComponent } from './components/missionImposibleMovies/missionImposibleMovies.component';
import { missionImposibleMoviesRoutingModule } from './missionImposibleMovies-routing.module';


@NgModule({
  declarations: [
    missionImposibleMoviesPageComponent,
    missionImposibleMoviesComponent
  ],
  imports: [
    CommonModule,
    missionImposibleMoviesRoutingModule
  ]
})
export class missionImposibleMoviesModule { }
