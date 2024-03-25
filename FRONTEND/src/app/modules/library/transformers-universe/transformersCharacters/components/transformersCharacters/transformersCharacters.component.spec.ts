import { ComponentFixture, TestBed } from '@angular/core/testing';

import { transformersCharactersComponent } from './transformersCharacters.component';

describe('transformersCharactersComponent', () => {
  let component: transformersCharactersComponent;
  let fixture: ComponentFixture<transformersCharactersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [transformersCharactersComponent]
    });
    fixture = TestBed.createComponent(transformersCharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
