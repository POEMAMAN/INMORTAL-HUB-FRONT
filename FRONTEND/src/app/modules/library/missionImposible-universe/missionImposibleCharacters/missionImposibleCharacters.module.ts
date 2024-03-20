import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { missionImposibleCharactersComponent } from './components/missionImposibleCharacters/missionImposibleCharacters.component';
import { missionImposibleCharactersPageComponent } from './pages/missionImposibleCharacters-page/missionImposibleCharacters-page.component';
import { missionImposibleCharactersRoutingModule } from './missionImposibleCharacters-routing.module';



@NgModule({
  declarations: [
    missionImposibleCharactersComponent,
    missionImposibleCharactersPageComponent
  ],
  imports: [
    CommonModule,
    missionImposibleCharactersRoutingModule

  ]
})
export class missionImposibleCharactersModule { }
