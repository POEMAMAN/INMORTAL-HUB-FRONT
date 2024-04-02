import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { backToTheFutureCharactersComponent } from './components/backToTheFutureCharacters/backToTheFutureCharacters.component';
import { backToTheFutureCharactersPageComponent } from './pages/backToTheFutureCharacters-page/backToTheFutureCharacters-page.component';
import { backToTheFutureCharactersRoutingModule } from './backToTheFutureCharacters-routing.module';



@NgModule({
  declarations: [
    backToTheFutureCharactersComponent,
    backToTheFutureCharactersPageComponent
  ],
  imports: [
    CommonModule,
    backToTheFutureCharactersRoutingModule

  ]
})
export class backToTheFutureCharactersModule { }
