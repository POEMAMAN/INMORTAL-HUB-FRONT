import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { matrixVideoGamesPageComponent } from './pages/matrixVideoGames-page/matrixVideoGames-page.component';
import { matrixVideoGamesComponent } from './components/matrixVideoGames/matrixVideoGames.component';
import { matrixVideoGamesRoutingModule } from './matrixVideoGames-routing.module';


@NgModule({
  declarations: [
    matrixVideoGamesPageComponent,
    matrixVideoGamesComponent
  ],
  imports: [
    CommonModule,
    matrixVideoGamesRoutingModule
  ]
})
export class matrixVideoGamesModule { }
