import { ComponentFixture, TestBed } from '@angular/core/testing';

import { apesPlanetCharactersPageComponent } from './apesPlanetCharacters-page.component';

describe('apesPlanetCharactersPageComponent', () => {
  let component: apesPlanetCharactersPageComponent;
  let fixture: ComponentFixture<apesPlanetCharactersPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [apesPlanetCharactersPageComponent]
    });
    fixture = TestBed.createComponent(apesPlanetCharactersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
