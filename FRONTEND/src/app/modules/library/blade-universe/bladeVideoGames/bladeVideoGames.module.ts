import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bladeVideoGamesPageComponent } from './pages/bladeVideoGames-page/bladeVideoGames-page.component';
import { bladeVideoGamesComponent } from './components/bladeVideoGames/bladeVideoGames.component';
import { bladeVideoGamesRoutingModule } from './bladeVideoGames-routing.module';


@NgModule({
  declarations: [
    bladeVideoGamesPageComponent,
    bladeVideoGamesComponent
  ],
  imports: [
    CommonModule,
    bladeVideoGamesRoutingModule
  ]
})
export class bladeVideoGamesModule { }
