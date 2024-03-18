import { ComponentFixture, TestBed } from '@angular/core/testing';

import { alienCharactersPageComponent } from './alienCharacters-page.component';

describe('alienCharactersPageComponent', () => {
  let component: alienCharactersPageComponent;
  let fixture: ComponentFixture<alienCharactersPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [alienCharactersPageComponent]
    });
    fixture = TestBed.createComponent(alienCharactersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
