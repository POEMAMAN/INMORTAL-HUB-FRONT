import { ComponentFixture, TestBed } from '@angular/core/testing';

import { lordOfTheRingsBooksPageComponent } from './lordOfTheRingsBooks-page.component';

describe('lordOfTheRingsBooksPageComponent', () => {
  let component: lordOfTheRingsBooksPageComponent;
  let fixture: ComponentFixture<lordOfTheRingsBooksPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [lordOfTheRingsBooksPageComponent]
    });
    fixture = TestBed.createComponent(lordOfTheRingsBooksPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
