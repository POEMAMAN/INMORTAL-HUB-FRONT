import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { hungerGamesBooksRoutingModule } from './hungerGamesBooks-routing.module';
import { hungerGamesBooksPageComponent } from './pages/hungerGamesBooks-page/hungerGamesBooks-page.component';
import { hungerGamesBooksComponent } from './components/hungerGamesBooks/hungerGamesBooks.component';


@NgModule({
  declarations: [
    hungerGamesBooksPageComponent,
    hungerGamesBooksComponent
  ],
  imports: [
    CommonModule,
    hungerGamesBooksRoutingModule
  ]
})
export class hungerGamesBooksModule { }
