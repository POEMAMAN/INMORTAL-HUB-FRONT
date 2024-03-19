import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { apesPlanetCharactersComponent } from './components/apesPlanetCharacters/apesPlanetCharacters.component';
import { apesPlanetCharactersPageComponent } from './pages/apesPlanetCharacters-page/apesPlanetCharacters-page.component';
import { apesPlanetCharactersRoutingModule } from './apesPlanetCharacters-routing.module';



@NgModule({
  declarations: [
    apesPlanetCharactersComponent,
    apesPlanetCharactersPageComponent
  ],
  imports: [
    CommonModule,
    apesPlanetCharactersRoutingModule

  ]
})
export class apesPlanetCharactersModule { }
