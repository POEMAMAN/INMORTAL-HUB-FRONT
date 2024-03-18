import { ComponentFixture, TestBed } from '@angular/core/testing';

import { starswarsUniverseComponent } from './starswars-universe.component';

describe('starswarsUniverseComponent', () => {
  let component: starswarsUniverseComponent;
  let fixture: ComponentFixture<starswarsUniverseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [starswarsUniverseComponent]
    });
    fixture = TestBed.createComponent(starswarsUniverseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
