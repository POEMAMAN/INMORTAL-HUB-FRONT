import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { lordOfTheRingsBooksRoutingModule } from './lordOfTheRingsBooks-routing.module';
import { lordOfTheRingsBooksPageComponent } from './pages/lordOfTheRingsBooks-page/lordOfTheRingsBooks-page.component';
import { lordOfTheRingsBooksComponent } from './components/lordOfTheRingsBooks/lordOfTheRingsBooks.component';


@NgModule({
  declarations: [
    lordOfTheRingsBooksPageComponent,
    lordOfTheRingsBooksComponent
  ],
  imports: [
    CommonModule,
    lordOfTheRingsBooksRoutingModule
  ]
})
export class lordOfTheRingsBooksModule { }
