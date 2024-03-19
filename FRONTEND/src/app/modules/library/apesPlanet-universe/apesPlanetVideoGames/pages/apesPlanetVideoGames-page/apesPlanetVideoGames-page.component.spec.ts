import { ComponentFixture, TestBed } from '@angular/core/testing';

import { apesPlanetVideoGamesPageComponent } from './apesPlanetVideoGames-page.component';

describe('apesPlanetVideoGamesPageComponent', () => {
  let component: apesPlanetVideoGamesPageComponent;
  let fixture: ComponentFixture<apesPlanetVideoGamesPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [apesPlanetVideoGamesPageComponent]
    });
    fixture = TestBed.createComponent(apesPlanetVideoGamesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
