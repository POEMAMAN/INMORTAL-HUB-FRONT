import { ComponentFixture, TestBed } from '@angular/core/testing';

import { starTrekCharactersComponent } from './starTrekCharacters.component';

describe('starTrekCharactersComponent', () => {
  let component: starTrekCharactersComponent;
  let fixture: ComponentFixture<starTrekCharactersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [starTrekCharactersComponent]
    });
    fixture = TestBed.createComponent(starTrekCharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
