import { ComponentFixture, TestBed } from '@angular/core/testing';

import { starWarsCharactersComponent } from './starWarsCharacters.component';

describe('starWarsCharactersComponent', () => {
  let component: starWarsCharactersComponent;
  let fixture: ComponentFixture<starWarsCharactersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [starWarsCharactersComponent]
    });
    fixture = TestBed.createComponent(starWarsCharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
