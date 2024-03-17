import { ComponentFixture, TestBed } from '@angular/core/testing';

import { hungerGamesCharactersComponent } from './hungerGamesCharacters.component';

describe('hungerGamesCharactersComponent', () => {
  let component: hungerGamesCharactersComponent;
  let fixture: ComponentFixture<hungerGamesCharactersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [hungerGamesCharactersComponent]
    });
    fixture = TestBed.createComponent(hungerGamesCharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
