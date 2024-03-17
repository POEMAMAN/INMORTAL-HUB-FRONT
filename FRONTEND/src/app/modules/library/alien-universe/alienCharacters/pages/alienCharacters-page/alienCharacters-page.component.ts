import { AlienCharacter } from '../../interfaces/AlienCharacters.interface';
import { alienCharactersService } from '../../services/alienCharacters.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alienCharacters-page',
  templateUrl: './alienCharacters-page.component.html',
  styleUrls: ['./alienCharacters-page.component.scss']
})
export class alienCharactersPageComponent implements OnInit {
  alienCharacters: AlienCharacter[] = []
  constructor(private alienCharactersService: alienCharactersService ) {}


  ngOnInit(){
    this.alienCharactersService.getAlienCharacters().subscribe({
      next: (alienCharacters: AlienCharacter[]) => {
        this.alienCharacters = alienCharacters
      },
      error: () => {}
    })
  }

}
