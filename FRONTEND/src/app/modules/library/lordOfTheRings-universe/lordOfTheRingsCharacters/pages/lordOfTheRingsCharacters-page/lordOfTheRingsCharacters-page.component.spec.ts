import { ComponentFixture, TestBed } from '@angular/core/testing';

import { lordOfTheRingsCharactersPageComponent } from './lordOfTheRingsCharacters-page.component';

describe('lordOfTheRingsCharactersPageComponent', () => {
  let component: lordOfTheRingsCharactersPageComponent;
  let fixture: ComponentFixture<lordOfTheRingsCharactersPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [lordOfTheRingsCharactersPageComponent]
    });
    fixture = TestBed.createComponent(lordOfTheRingsCharactersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
