import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LordOfTheRingsComponent } from './lord-of-the-rings.component';

describe('LordOfTheRingsComponent', () => {
  let component: LordOfTheRingsComponent;
  let fixture: ComponentFixture<LordOfTheRingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LordOfTheRingsComponent]
    });
    fixture = TestBed.createComponent(LordOfTheRingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
