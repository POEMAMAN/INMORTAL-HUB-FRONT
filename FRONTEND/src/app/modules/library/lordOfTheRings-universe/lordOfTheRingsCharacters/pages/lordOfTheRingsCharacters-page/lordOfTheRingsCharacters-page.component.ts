import { lordOfTheRingsCharacter } from '../../interfaces/lordOfTheRingsCharacters.interface';
import { lordOfTheRingsCharactersService } from '../../services/lordOfTheRingsCharacters.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lordOfTheRingsCharacters-page',
  templateUrl: './lordOfTheRingsCharacters-page.component.html',
  styleUrls: ['./lordOfTheRingsCharacters-page.component.scss']
})
export class lordOfTheRingsCharactersPageComponent implements OnInit {
  lordOfTheRingsCharacters: lordOfTheRingsCharacter[] = []
  constructor(private lordOfTheRingsCharactersService: lordOfTheRingsCharactersService ) {}


  ngOnInit(){
    this.lordOfTheRingsCharactersService.getlordOfTheRingsCharacters().subscribe({
      next: (lordOfTheRingsCharacters: lordOfTheRingsCharacter[]) => {
        this.lordOfTheRingsCharacters = lordOfTheRingsCharacters
      },
      error: () => {}
    })
  }

}
