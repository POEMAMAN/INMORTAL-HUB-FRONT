import { ComponentFixture, TestBed } from '@angular/core/testing';

import { xmenCharactersPageComponent } from './xmenCharacters-page.component';

describe('xmenCharactersPageComponent', () => {
  let component: xmenCharactersPageComponent;
  let fixture: ComponentFixture<xmenCharactersPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [xmenCharactersPageComponent]
    });
    fixture = TestBed.createComponent(xmenCharactersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
