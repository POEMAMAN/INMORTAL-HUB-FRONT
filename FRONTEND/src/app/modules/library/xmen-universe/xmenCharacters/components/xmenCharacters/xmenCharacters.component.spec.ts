import { ComponentFixture, TestBed } from '@angular/core/testing';

import { xmenCharactersComponent } from './xmenCharacters.component';

describe('xmenCharactersComponent', () => {
  let component: xmenCharactersComponent;
  let fixture: ComponentFixture<xmenCharactersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [xmenCharactersComponent]
    });
    fixture = TestBed.createComponent(xmenCharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
