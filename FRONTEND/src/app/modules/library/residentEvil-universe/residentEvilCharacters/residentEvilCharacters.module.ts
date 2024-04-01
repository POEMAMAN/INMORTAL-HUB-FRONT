import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { residentEvilCharactersPageComponent } from './pages/residentEvilCharacters-page/residentEvilCharacters-page.component';
import { residentEvilCharactersRoutingModule } from './residentEvilCharacters-routing.module';
import { residentEvilCharactersComponent } from './components/residentEvilCharacters/residentEvilCharacters.component';



@NgModule({
  declarations: [
    residentEvilCharactersComponent,
    residentEvilCharactersPageComponent,
  ],
  imports: [
    CommonModule,
    residentEvilCharactersRoutingModule

  ]
})
export class residentEvilCharactersModule { }
