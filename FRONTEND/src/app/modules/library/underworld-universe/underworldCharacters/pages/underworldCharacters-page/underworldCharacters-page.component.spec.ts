import { ComponentFixture, TestBed } from '@angular/core/testing';

import { underworldCharactersPageComponent } from './underworldCharacters-page.component';

describe('underworldCharactersPageComponent', () => {
  let component: underworldCharactersPageComponent;
  let fixture: ComponentFixture<underworldCharactersPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [underworldCharactersPageComponent]
    });
    fixture = TestBed.createComponent(underworldCharactersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
