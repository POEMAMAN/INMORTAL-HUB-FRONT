import { ComponentFixture, TestBed } from '@angular/core/testing';

import { underworldUniverseComponent } from './underworld-universe.component';

describe('underworldUniverseComponent', () => {
  let component: underworldUniverseComponent;
  let fixture: ComponentFixture<underworldUniverseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [underworldUniverseComponent]
    });
    fixture = TestBed.createComponent(underworldUniverseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
