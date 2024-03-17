import { ComponentFixture, TestBed } from '@angular/core/testing';

import { alienCharactersComponent } from './alienCharacters.component';

describe('alienCharactersComponent', () => {
  let component: alienCharactersComponent;
  let fixture: ComponentFixture<alienCharactersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [alienCharactersComponent]
    });
    fixture = TestBed.createComponent(alienCharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
