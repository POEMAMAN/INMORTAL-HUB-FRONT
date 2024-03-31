import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { residentEvilVideoGamesPageComponent } from './pages/residentEvilVideoGames-page/residentEvilVideoGames-page.component';
import { residentEvilVideoGamesComponent } from './components/residentEvilVideoGames/residentEvilVideoGames.component';
import { residentEvilVideoGamesRoutingModule } from './residentEvilVideoGames-routing.module';


@NgModule({
  declarations: [
    residentEvilVideoGamesPageComponent,
    residentEvilVideoGamesComponent
  ],
  imports: [
    CommonModule,
    residentEvilVideoGamesRoutingModule
  ]
})
export class residentEvilVideoGamesModule { }
