import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { backToTheFutureVideoGamesPageComponent } from './pages/backToTheFutureVideoGames-page/backToTheFutureVideoGames-page.component';
import { backToTheFutureVideoGamesComponent } from './components/backToTheFutureVideoGames/backToTheFutureVideoGames.component';
import { backToTheFutureVideoGamesRoutingModule } from './backToTheFutureVideoGames-routing.module';


@NgModule({
  declarations: [
    backToTheFutureVideoGamesPageComponent,
    backToTheFutureVideoGamesComponent
  ],
  imports: [
    CommonModule,
    backToTheFutureVideoGamesRoutingModule
  ]
})
export class backToTheFutureVideoGamesModule { }
