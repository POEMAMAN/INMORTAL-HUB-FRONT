import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { terminatorVideoGamesPageComponent } from './pages/terminatorVideoGames-page/terminatorVideoGames-page.component';
import { terminatorVideoGamesComponent } from './components/terminatorVideoGames/terminatorVideoGames.component';
import { terminatorVideoGamesRoutingModule } from './terminatorVideoGames-routing.module';


@NgModule({
  declarations: [
    terminatorVideoGamesPageComponent,
    terminatorVideoGamesComponent
  ],
  imports: [
    CommonModule,
    terminatorVideoGamesRoutingModule
  ]
})
export class terminatorVideoGamesModule { }
