import { ComponentFixture, TestBed } from '@angular/core/testing';

import { lordOfTheRingsCharactersComponent } from './lordOfTheRingsCharacters.component';

describe('lordOfTheRingsCharactersComponent', () => {
  let component: lordOfTheRingsCharactersComponent;
  let fixture: ComponentFixture<lordOfTheRingsCharactersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [lordOfTheRingsCharactersComponent]
    });
    fixture = TestBed.createComponent(lordOfTheRingsCharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
