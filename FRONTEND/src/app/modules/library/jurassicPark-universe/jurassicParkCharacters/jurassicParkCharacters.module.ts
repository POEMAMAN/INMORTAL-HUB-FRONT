import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { jurassicParkCharactersRoutingModule } from './jurassicParkCharacters-routing.module';
import { jurassicParkCharactersPageComponent } from './pages/jurassicParkCharacters-page/jurassicParkCharacters-page.component';
import { jurassicParkCharactersComponent } from './components/jurassicParkCharacters/jurassicParkCharacters.component';


@NgModule({
  declarations: [
    jurassicParkCharactersComponent,
    jurassicParkCharactersPageComponent
  ],
  imports: [
    CommonModule,
    jurassicParkCharactersRoutingModule,

  ]
})
export class jurassicParkCharactersModule { }
