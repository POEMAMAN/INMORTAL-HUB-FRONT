import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { transformersCharactersComponent } from './components/transformersCharacters/transformersCharacters.component';
import { transformersCharactersPageComponent } from './pages/transformersCharacters-page/transformersCharacters-page.component';
import { transformersCharactersRoutingModule } from './transformersCharacters-routing.module';



@NgModule({
  declarations: [
    transformersCharactersComponent,
    transformersCharactersPageComponent
  ],
  imports: [
    CommonModule,
    transformersCharactersRoutingModule

  ]
})
export class transformersCharactersModule { }
