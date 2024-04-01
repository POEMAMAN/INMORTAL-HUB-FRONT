import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { xmenCharactersPageComponent } from './pages/xmenCharacters-page/xmenCharacters-page.component';
import { xmenCharactersRoutingModule } from './xmenCharacters-routing.module';
import { xmenCharactersComponent } from './components/xmenCharacters/xmenCharacters.component';



@NgModule({
  declarations: [
    xmenCharactersComponent,
    xmenCharactersPageComponent,
  ],
  imports: [
    CommonModule,
    xmenCharactersRoutingModule

  ]
})
export class xmenCharactersModule { }
