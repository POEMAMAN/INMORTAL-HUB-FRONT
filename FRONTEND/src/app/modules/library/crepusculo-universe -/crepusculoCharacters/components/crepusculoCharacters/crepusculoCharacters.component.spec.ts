import { ComponentFixture, TestBed } from '@angular/core/testing';

import { crepusculoCharactersComponent } from './crepusculoCharacters.component';

describe('crepusculoCharactersComponent', () => {
  let component: crepusculoCharactersComponent;
  let fixture: ComponentFixture<crepusculoCharactersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [crepusculoCharactersComponent]
    });
    fixture = TestBed.createComponent(crepusculoCharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
