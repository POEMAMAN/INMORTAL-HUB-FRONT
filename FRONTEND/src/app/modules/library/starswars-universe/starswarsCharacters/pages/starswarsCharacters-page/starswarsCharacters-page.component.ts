import { starswarsCharacter } from '../../interfaces/starswarsCharacters.interface';
import { starswarsCharactersService } from '../../services/starswarsCharacters.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-starswarsCharacters-page',
  templateUrl: './starswarsCharacters-page.component.html',
  styleUrls: ['./starswarsCharacters-page.component.scss']
})
export class starswarsCharactersPageComponent implements OnInit {
  starswarsCharacters: starswarsCharacter[] = []
  constructor(private starswarsCharactersService: starswarsCharactersService ) {}


  ngOnInit(){
    this.starswarsCharactersService.getstarswarsCharacters().subscribe({
      next: (starswarsCharacters: starswarsCharacter[]) => {
        this.starswarsCharacters = starswarsCharacters
      },
      error: () => {}
    })
  }

}
