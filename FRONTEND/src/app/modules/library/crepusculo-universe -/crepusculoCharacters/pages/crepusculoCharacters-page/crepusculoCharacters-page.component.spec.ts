import { ComponentFixture, TestBed } from '@angular/core/testing';

import { crepusculoCharactersPageComponent } from './crepusculoCharacters-page.component';

describe('crepusculoCharactersPageComponent', () => {
  let component: crepusculoCharactersPageComponent;
  let fixture: ComponentFixture<crepusculoCharactersPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [crepusculoCharactersPageComponent]
    });
    fixture = TestBed.createComponent(crepusculoCharactersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
