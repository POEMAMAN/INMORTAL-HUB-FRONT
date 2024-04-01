import { ComponentFixture, TestBed } from '@angular/core/testing';

import { xmenUniverseComponent } from './xmen-universe.component';

describe('xmenUniverseComponent', () => {
  let component: xmenUniverseComponent;
  let fixture: ComponentFixture<xmenUniverseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [xmenUniverseComponent]
    });
    fixture = TestBed.createComponent(xmenUniverseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
