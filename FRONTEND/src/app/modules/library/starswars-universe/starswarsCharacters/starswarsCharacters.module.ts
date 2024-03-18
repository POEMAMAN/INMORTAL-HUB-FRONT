import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { starswarsCharactersRoutingModule } from './starswarsCharacters-routing.module';
import { starswarsCharactersPageComponent } from './pages/starswarsCharacters-page/starswarsCharacters-page.component';
import { starswarsCharactersComponent } from './components/starswarsCharacters/starswarsCharacters.component';


@NgModule({
  declarations: [
    starswarsCharactersComponent,
    starswarsCharactersPageComponent
  ],
  imports: [
    CommonModule,
    starswarsCharactersRoutingModule,

  ]
})
export class starswarsCharactersModule { }
