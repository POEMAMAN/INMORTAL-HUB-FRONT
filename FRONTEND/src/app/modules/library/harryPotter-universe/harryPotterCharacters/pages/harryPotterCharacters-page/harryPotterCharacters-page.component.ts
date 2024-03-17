import { HarryPotterCharacter } from '../../interfaces/HarryPotterCharacters.interface';
import { harryPotterCharactersService } from '../../services/harryPotterCharacters.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-harryPotterCharacters-page',
  templateUrl: './harryPotterCharacters-page.component.html',
  styleUrls: ['./harryPotterCharacters-page.component.scss']
})
export class harryPotterCharactersPageComponent implements OnInit {
  harryPotterCharacters: HarryPotterCharacter[] = []
  constructor(private harryPotterCharactersService: harryPotterCharactersService ) {}


  ngOnInit(){
    this.harryPotterCharactersService.getHarryPotterCharacters().subscribe({
      next: (harryPotterCharacters: HarryPotterCharacter[]) => {
        this.harryPotterCharacters = harryPotterCharacters
      },
      error: () => {}
    })
  }

}
