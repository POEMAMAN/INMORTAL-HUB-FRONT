import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndianaJonesUniverseComponent } from './indianaJones-universe.component';

describe('IndianaJonesUniverseComponent', () => {
  let component: IndianaJonesUniverseComponent;
  let fixture: ComponentFixture<IndianaJonesUniverseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndianaJonesUniverseComponent]
    });
    fixture = TestBed.createComponent(IndianaJonesUniverseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
