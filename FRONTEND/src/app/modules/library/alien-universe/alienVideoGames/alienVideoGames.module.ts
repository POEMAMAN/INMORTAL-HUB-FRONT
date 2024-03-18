import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { alienVideoGamesPageComponent } from './pages/alienVideoGames-page/alienVideoGames-page.component';
import { alienVideoGamesComponent } from './components/alienVideoGames/alienVideoGames.component';
import { alienVideoGamesRoutingModule } from './alienVideoGames-routing.module';


@NgModule({
  declarations: [
    alienVideoGamesPageComponent,
    alienVideoGamesComponent
  ],
  imports: [
    CommonModule,
    alienVideoGamesRoutingModule
  ]
})
export class alienVideoGamesModule { }
