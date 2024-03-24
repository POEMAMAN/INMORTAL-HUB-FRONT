import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { starTrekCharactersRoutingModule } from './starTrekCharacters-routing.module';
import { starTrekCharactersPageComponent } from './pages/starTrekCharacters-page/starTrekCharacters-page.component';
import { starTrekCharactersComponent } from './components/starTrekCharacters/starTrekCharacters.component';


@NgModule({
  declarations: [
    starTrekCharactersComponent,
    starTrekCharactersPageComponent
  ],
  imports: [
    CommonModule,
    starTrekCharactersRoutingModule,

  ]
})
export class starTrekCharactersModule { }
