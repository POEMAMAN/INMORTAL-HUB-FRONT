import { ComponentFixture, TestBed } from '@angular/core/testing';

import { missionImposibleVideoGamesComponent } from './missionImposibleVideoGames.component';

describe('missionImposibleVideoGamesComponent', () => {
  let component: missionImposibleVideoGamesComponent;
  let fixture: ComponentFixture<missionImposibleVideoGamesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [missionImposibleVideoGamesComponent]
    });
    fixture = TestBed.createComponent(missionImposibleVideoGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
