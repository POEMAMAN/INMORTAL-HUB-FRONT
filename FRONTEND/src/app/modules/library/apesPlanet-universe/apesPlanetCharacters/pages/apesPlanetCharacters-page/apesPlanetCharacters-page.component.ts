import { ApesPlanetCharacter } from '../../interfaces/apesPlanetCharacters.interface';
import { apesPlanetCharactersService } from '../../services/apesPlanetCharacters.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apesPlanetCharacters-page',
  templateUrl: './apesPlanetCharacters-page.component.html',
  styleUrls: ['./apesPlanetCharacters-page.component.scss']
})
export class apesPlanetCharactersPageComponent implements OnInit {
  apesPlanetCharacters: ApesPlanetCharacter[] = []
  constructor(private apesPlanetCharactersService: apesPlanetCharactersService ) {}


  ngOnInit(){
    this.apesPlanetCharactersService.getApesPlanetCharacters().subscribe({
      next: (apesPlanetCharacters: ApesPlanetCharacter[]) => {
        this.apesPlanetCharacters = apesPlanetCharacters
      },
      error: () => {}
    })
  }

}
