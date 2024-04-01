import { ComponentFixture, TestBed } from '@angular/core/testing';

import { matrixCharactersPageComponent } from './matrixCharacters-page.component';

describe('matrixCharactersPageComponent', () => {
  let component: matrixCharactersPageComponent;
  let fixture: ComponentFixture<matrixCharactersPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [matrixCharactersPageComponent]
    });
    fixture = TestBed.createComponent(matrixCharactersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
