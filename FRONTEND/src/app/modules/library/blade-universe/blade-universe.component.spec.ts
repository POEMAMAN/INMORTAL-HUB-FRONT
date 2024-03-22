import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BladeUniverseComponent } from './blade-universe.component';

describe('BladeUniverseComponent', () => {
  let component: BladeUniverseComponent;
  let fixture: ComponentFixture<BladeUniverseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BladeUniverseComponent]
    });
    fixture = TestBed.createComponent(BladeUniverseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
