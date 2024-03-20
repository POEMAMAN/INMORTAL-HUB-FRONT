import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { missionImposibleVideoGamesPageComponent } from './pages/missionImposibleVideoGames-page/missionImposibleVideoGames-page.component';
import { missionImposibleVideoGamesComponent } from './components/missionImposibleVideoGames/missionImposibleVideoGames.component';
import { missionImposibleVideoGamesRoutingModule } from './missionImposibleVideoGames-routing.module';


@NgModule({
  declarations: [
    missionImposibleVideoGamesPageComponent,
    missionImposibleVideoGamesComponent
  ],
  imports: [
    CommonModule,
    missionImposibleVideoGamesRoutingModule
  ]
})
export class missionImposibleVideoGamesModule { }
