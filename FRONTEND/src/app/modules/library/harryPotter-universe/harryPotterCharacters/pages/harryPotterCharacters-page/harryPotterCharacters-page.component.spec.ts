import { ComponentFixture, TestBed } from '@angular/core/testing';

import { harryPotterCharactersPageComponent } from './harryPotterCharacters-page.component';

describe('harryPotterCharactersPageComponent', () => {
  let component: harryPotterCharactersPageComponent;
  let fixture: ComponentFixture<harryPotterCharactersPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [harryPotterCharactersPageComponent]
    });
    fixture = TestBed.createComponent(harryPotterCharactersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
