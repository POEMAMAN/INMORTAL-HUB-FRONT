import { ComponentFixture, TestBed } from '@angular/core/testing';

import { missionImposibleVideoGamesPageComponent } from './missionImposibleVideoGames-page.component';

describe('missionImposibleVideoGamesPageComponent', () => {
  let component: missionImposibleVideoGamesPageComponent;
  let fixture: ComponentFixture<missionImposibleVideoGamesPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [missionImposibleVideoGamesPageComponent]
    });
    fixture = TestBed.createComponent(missionImposibleVideoGamesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
