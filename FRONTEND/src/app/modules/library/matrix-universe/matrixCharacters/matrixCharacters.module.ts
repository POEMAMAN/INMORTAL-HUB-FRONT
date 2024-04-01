import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { matrixCharactersComponent } from './components/matrixCharacters/matrixCharacters.component';
import { matrixCharactersPageComponent } from './pages/matrixCharacters-page/matrixCharacters-page.component';
import { matrixCharactersRoutingModule } from './matrixCharacters-routing.module';



@NgModule({
  declarations: [
    matrixCharactersComponent,
    matrixCharactersPageComponent
  ],
  imports: [
    CommonModule,
    matrixCharactersRoutingModule

  ]
})
export class matrixCharactersModule { }
