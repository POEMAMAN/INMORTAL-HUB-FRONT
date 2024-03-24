import { ComponentFixture, TestBed } from '@angular/core/testing';

import { jurassicParkBooksComponent } from './jurassicParkBooks.component';

describe('jurassicParkBooksComponent', () => {
  let component: jurassicParkBooksComponent;
  let fixture: ComponentFixture<jurassicParkBooksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [jurassicParkBooksComponent]
    });
    fixture = TestBed.createComponent(jurassicParkBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
