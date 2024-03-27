import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { transformersVideoGamesPageComponent } from './pages/transformersVideoGames-page/transformersVideoGames-page.component';
import { transformersVideoGamesComponent } from './components/transformersVideoGames/transformersVideoGames.component';
import { transformersVideoGamesRoutingModule } from './transformersVideoGames-routing.module';


@NgModule({
  declarations: [
    transformersVideoGamesPageComponent,
    transformersVideoGamesComponent
  ],
  imports: [
    CommonModule,
    transformersVideoGamesRoutingModule
  ]
})
export class transformersVideoGamesModule { }
