import { ComponentFixture, TestBed } from '@angular/core/testing';

import { hungerGamesCharactersPageComponent } from './hungerGamesCharacters-page.component';

describe('hungerGamesCharactersPageComponent', () => {
  let component: hungerGamesCharactersPageComponent;
  let fixture: ComponentFixture<hungerGamesCharactersPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [hungerGamesCharactersPageComponent]
    });
    fixture = TestBed.createComponent(hungerGamesCharactersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
