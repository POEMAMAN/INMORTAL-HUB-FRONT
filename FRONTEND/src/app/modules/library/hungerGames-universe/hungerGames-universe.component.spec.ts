import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HungerGamesUniverseComponent } from './hungerGames-universe.component';

describe('HungerGamesUniverseComponent', () => {
  let component: HungerGamesUniverseComponent;
  let fixture: ComponentFixture<HungerGamesUniverseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HungerGamesUniverseComponent]
    });
    fixture = TestBed.createComponent(HungerGamesUniverseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
