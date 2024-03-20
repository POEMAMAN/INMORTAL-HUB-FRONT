import { BladeCharacter } from '../../interfaces/BladeCharacters.interface';
import { bladeCharactersService } from '../../services/bladeCharacters.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bladeCharacters-page',
  templateUrl: './bladeCharacters-page.component.html',
  styleUrls: ['./bladeCharacters-page.component.scss']
})
export class bladeCharactersPageComponent implements OnInit {
  bladeCharacters: BladeCharacter[] = []
  constructor(private bladeCharactersService: bladeCharactersService ) {}


  ngOnInit(){
    this.bladeCharactersService.getBladeCharacters().subscribe({
      next: (bladeCharacters: BladeCharacter[]) => {
        this.bladeCharacters = bladeCharacters
      },
      error: () => {}
    })
  }

}
