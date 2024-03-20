import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bladeCharactersComponent } from './components/bladeCharacters/bladeCharacters.component';
import { bladeCharactersPageComponent } from './pages/bladeCharacters-page/bladeCharacters-page.component';
import { bladeCharactersRoutingModule } from './bladeCharacters-routing.module';



@NgModule({
  declarations: [
    bladeCharactersComponent,
    bladeCharactersPageComponent
  ],
  imports: [
    CommonModule,
    bladeCharactersRoutingModule

  ]
})
export class bladeCharactersModule { }
