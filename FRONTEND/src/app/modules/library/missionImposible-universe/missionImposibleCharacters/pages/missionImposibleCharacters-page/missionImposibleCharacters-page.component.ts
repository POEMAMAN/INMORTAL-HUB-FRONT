import { MissionImposibleCharacter } from '../../interfaces/MissionImposibleCharacters.interface';
import { missionImposibleCharactersService } from '../../services/missionImposibleCharacters.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-missionImposibleCharacters-page',
  templateUrl: './missionImposibleCharacters-page.component.html',
  styleUrls: ['./missionImposibleCharacters-page.component.scss']
})
export class missionImposibleCharactersPageComponent implements OnInit {
  missionImposibleCharacters: MissionImposibleCharacter[] = []
  constructor(private missionImposibleCharactersService: missionImposibleCharactersService ) {}


  ngOnInit(){
    this.missionImposibleCharactersService.getMissionImposibleCharacters().subscribe({
      next: (missionImposibleCharacters: MissionImposibleCharacter[]) => {
        this.missionImposibleCharacters = missionImposibleCharacters
      },
      error: () => {}
    })
  }

}
