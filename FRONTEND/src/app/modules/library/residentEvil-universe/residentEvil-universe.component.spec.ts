import { ComponentFixture, TestBed } from '@angular/core/testing';

import { residentEvilUniverseComponent } from './residentEvil-universe.component';

describe('residentEvilUniverseComponent', () => {
  let component: residentEvilUniverseComponent;
  let fixture: ComponentFixture<residentEvilUniverseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [residentEvilUniverseComponent]
    });
    fixture = TestBed.createComponent(residentEvilUniverseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
