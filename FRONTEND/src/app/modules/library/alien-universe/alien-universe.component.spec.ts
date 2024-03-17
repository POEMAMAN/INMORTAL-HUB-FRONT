import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlienUniverseComponent } from './alien-universe.component';

describe('AlienUniverseComponent', () => {
  let component: AlienUniverseComponent;
  let fixture: ComponentFixture<AlienUniverseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlienUniverseComponent]
    });
    fixture = TestBed.createComponent(AlienUniverseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
