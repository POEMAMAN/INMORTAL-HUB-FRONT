import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { alienCharactersComponent } from './components/alienCharacters/alienCharacters.component';
import { alienCharactersPageComponent } from './pages/alienCharacters-page/alienCharacters-page.component';
import { alienCharactersRoutingModule } from './alienCharacters-routing.module';



@NgModule({
  declarations: [
    alienCharactersComponent,
    alienCharactersPageComponent
  ],
  imports: [
    CommonModule,
    alienCharactersRoutingModule

  ]
})
export class alienCharactersModule { }
