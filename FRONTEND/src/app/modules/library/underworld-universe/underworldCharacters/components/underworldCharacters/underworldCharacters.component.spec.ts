import { ComponentFixture, TestBed } from '@angular/core/testing';

import { underworldCharactersComponent } from './underworldCharacters.component';

describe('underworldCharactersComponent', () => {
  let component: underworldCharactersComponent;
  let fixture: ComponentFixture<underworldCharactersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [underworldCharactersComponent]
    });
    fixture = TestBed.createComponent(underworldCharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
