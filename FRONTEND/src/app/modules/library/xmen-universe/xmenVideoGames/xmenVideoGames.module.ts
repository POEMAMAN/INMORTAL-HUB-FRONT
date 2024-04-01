import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { xmenVideoGamesPageComponent } from './pages/xmenVideoGames-page/xmenVideoGames-page.component';
import { xmenVideoGamesComponent } from './components/xmenVideoGames/xmenVideoGames.component';
import { xmenVideoGamesRoutingModule } from './xmenVideoGames-routing.module';


@NgModule({
  declarations: [
    xmenVideoGamesPageComponent,
    xmenVideoGamesComponent
  ],
  imports: [
    CommonModule,
    xmenVideoGamesRoutingModule
  ]
})
export class xmenVideoGamesModule { }
