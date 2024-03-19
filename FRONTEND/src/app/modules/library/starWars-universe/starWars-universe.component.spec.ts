import { ComponentFixture, TestBed } from '@angular/core/testing';

import { starWarsUniverseComponent } from './starWars-universe.component';

describe('starWarsUniverseComponent', () => {
  let component: starWarsUniverseComponent;
  let fixture: ComponentFixture<starWarsUniverseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [starWarsUniverseComponent]
    });
    fixture = TestBed.createComponent(starWarsUniverseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
