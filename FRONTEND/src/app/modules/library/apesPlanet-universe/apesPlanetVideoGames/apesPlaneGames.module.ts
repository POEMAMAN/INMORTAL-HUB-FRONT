import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { apesPlanetVideoGamesPageComponent } from './pages/apesPlanetVideoGames-page/apesPlanetVideoGames-page.component';
import { apesPlanetVideoGamesComponent } from './components/apesPlanetVideoGames/apesPlanetVideoGames.component';
import { apesPlanetVideoGamesRoutingModule } from './apesPlanetVideoGames-routing.module';


@NgModule({
  declarations: [
    apesPlanetVideoGamesPageComponent,
    apesPlanetVideoGamesComponent
  ],
  imports: [
    CommonModule,
    apesPlanetVideoGamesRoutingModule
  ]
})
export class apesPlanetVideoGamesModule { }
