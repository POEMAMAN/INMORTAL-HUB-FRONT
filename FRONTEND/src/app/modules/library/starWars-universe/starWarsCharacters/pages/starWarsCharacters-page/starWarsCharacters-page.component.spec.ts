import { ComponentFixture, TestBed } from '@angular/core/testing';

import { starWarsCharactersPageComponent } from './starWarsCharacters-page.component';

describe('starWarsCharactersPageComponent', () => {
  let component: starWarsCharactersPageComponent;
  let fixture: ComponentFixture<starWarsCharactersPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [starWarsCharactersPageComponent]
    });
    fixture = TestBed.createComponent(starWarsCharactersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
