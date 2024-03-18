import { ComponentFixture, TestBed } from '@angular/core/testing';

import { harryPotterCharactersComponent } from './harryPotterCharacters.component';

describe('harryPotterCharactersComponent', () => {
  let component: harryPotterCharactersComponent;
  let fixture: ComponentFixture<harryPotterCharactersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [harryPotterCharactersComponent]
    });
    fixture = TestBed.createComponent(harryPotterCharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
