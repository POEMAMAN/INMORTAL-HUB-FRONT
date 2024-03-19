import { ComponentFixture, TestBed } from '@angular/core/testing';

import { apesPlanetVideoGamesComponent } from './apesPlanetVideoGames.component';

describe('apesPlanetVideoGamesComponent', () => {
  let component: apesPlanetVideoGamesComponent;
  let fixture: ComponentFixture<apesPlanetVideoGamesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [apesPlanetVideoGamesComponent]
    });
    fixture = TestBed.createComponent(apesPlanetVideoGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
