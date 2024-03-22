import { ComponentFixture, TestBed } from '@angular/core/testing';

import { lordOfTheRingsUniverseComponent } from './lordOfTheRings-universe.component';

describe('lordOfTheRingsUniverseComponent', () => {
  let component: lordOfTheRingsUniverseComponent;
  let fixture: ComponentFixture<lordOfTheRingsUniverseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [lordOfTheRingsUniverseComponent]
    });
    fixture = TestBed.createComponent(lordOfTheRingsUniverseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
