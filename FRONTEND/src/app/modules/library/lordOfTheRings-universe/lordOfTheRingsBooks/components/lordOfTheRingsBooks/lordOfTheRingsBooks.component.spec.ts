import { ComponentFixture, TestBed } from '@angular/core/testing';

import { lordOfTheRingsBooksComponent } from './lordOfTheRingsBooks.component';

describe('lordOfTheRingsBooksComponent', () => {
  let component: lordOfTheRingsBooksComponent;
  let fixture: ComponentFixture<lordOfTheRingsBooksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [lordOfTheRingsBooksComponent]
    });
    fixture = TestBed.createComponent(lordOfTheRingsBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
