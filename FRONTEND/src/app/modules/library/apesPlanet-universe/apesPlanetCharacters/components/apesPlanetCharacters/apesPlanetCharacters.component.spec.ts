import { ComponentFixture, TestBed } from '@angular/core/testing';

import { apesPlanetCharactersComponent } from './apesPlanetCharacters.component';

describe('apesPlanetCharactersComponent', () => {
  let component: apesPlanetCharactersComponent;
  let fixture: ComponentFixture<apesPlanetCharactersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [apesPlanetCharactersComponent]
    });
    fixture = TestBed.createComponent(apesPlanetCharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
