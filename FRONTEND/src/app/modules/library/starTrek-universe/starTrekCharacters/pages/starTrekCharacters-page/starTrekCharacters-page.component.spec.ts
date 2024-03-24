import { ComponentFixture, TestBed } from '@angular/core/testing';

import { starTrekCharactersPageComponent } from './starTrekCharacters-page.component';

describe('starTrekCharactersPageComponent', () => {
  let component: starTrekCharactersPageComponent;
  let fixture: ComponentFixture<starTrekCharactersPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [starTrekCharactersPageComponent]
    });
    fixture = TestBed.createComponent(starTrekCharactersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
