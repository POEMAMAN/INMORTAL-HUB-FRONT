import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { starWarsBooksRoutingModule } from './starWarsBooks-routing.module';
import { starWarsBooksPageComponent } from './pages/starWarsBooks-page/starWarsBooks-page.component';
import { starWarsBooksComponent } from './components/starWarsBooks/starWarsBooks.component';


@NgModule({
  declarations: [
    starWarsBooksPageComponent,
    starWarsBooksComponent
  ],
  imports: [
    CommonModule,
    starWarsBooksRoutingModule
  ]
})
export class starWarsBooksModule { }
