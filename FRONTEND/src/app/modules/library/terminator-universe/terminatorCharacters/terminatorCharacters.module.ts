import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { terminatorCharactersComponent } from './components/terminatorCharacters/terminatorCharacters.component';
import { terminatorCharactersPageComponent } from './pages/terminatorCharacters-page/terminatorCharacters-page.component';
import { terminatorCharactersRoutingModule } from './terminatorCharacters-routing.module';



@NgModule({
  declarations: [
    terminatorCharactersComponent,
    terminatorCharactersPageComponent
  ],
  imports: [
    CommonModule,
    terminatorCharactersRoutingModule

  ]
})
export class terminatorCharactersModule { }
