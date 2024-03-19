import { starWarsCharacter } from '../../interfaces/starWarsCharacters.interface';
import { starWarsCharactersService } from '../../services/starWarsCharacters.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-starWarsCharacters-page',
  templateUrl: './starWarsCharacters-page.component.html',
  styleUrls: ['./starWarsCharacters-page.component.scss']
})
export class starWarsCharactersPageComponent implements OnInit {
  starWarsCharacters: starWarsCharacter[] = []
  constructor(private starWarsCharactersService: starWarsCharactersService ) {}


  ngOnInit(){
    this.starWarsCharactersService.getstarWarsCharacters().subscribe({
      next: (starWarsCharacters: starWarsCharacter[]) => {
        this.starWarsCharacters = starWarsCharacters
      },
      error: () => {}
    })
  }

}
