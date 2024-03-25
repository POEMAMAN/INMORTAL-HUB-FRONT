import { ComponentFixture, TestBed } from '@angular/core/testing';

import { transformersCharactersPageComponent } from './transformersCharacters-page.component';

describe('transformersCharactersPageComponent', () => {
  let component: transformersCharactersPageComponent;
  let fixture: ComponentFixture<transformersCharactersPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [transformersCharactersPageComponent]
    });
    fixture = TestBed.createComponent(transformersCharactersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
