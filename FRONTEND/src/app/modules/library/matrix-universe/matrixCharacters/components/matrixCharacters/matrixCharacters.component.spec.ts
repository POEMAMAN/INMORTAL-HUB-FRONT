import { ComponentFixture, TestBed } from '@angular/core/testing';

import { matrixCharactersComponent } from './matrixCharacters.component';

describe('matrixCharactersComponent', () => {
  let component: matrixCharactersComponent;
  let fixture: ComponentFixture<matrixCharactersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [matrixCharactersComponent]
    });
    fixture = TestBed.createComponent(matrixCharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
