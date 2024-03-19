import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApesPlanetUniverseComponent } from './apesPlanet-universe.component';

describe('ApesPlanetUniverseComponent', () => {
  let component: ApesPlanetUniverseComponent;
  let fixture: ComponentFixture<ApesPlanetUniverseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApesPlanetUniverseComponent]
    });
    fixture = TestBed.createComponent(ApesPlanetUniverseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
