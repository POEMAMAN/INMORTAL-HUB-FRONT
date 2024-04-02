import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { underworldCharactersRoutingModule } from './underworldCharacters-routing.module';
import { underworldCharactersPageComponent } from './pages/underworldCharacters-page/underworldCharacters-page.component';
import { underworldCharactersComponent } from './components/underworldCharacters/underworldCharacters.component';


@NgModule({
  declarations: [
    underworldCharactersComponent,
    underworldCharactersPageComponent
  ],
  imports: [
    CommonModule,
    underworldCharactersRoutingModule,

  ]
})
export class underworldCharactersModule { }
