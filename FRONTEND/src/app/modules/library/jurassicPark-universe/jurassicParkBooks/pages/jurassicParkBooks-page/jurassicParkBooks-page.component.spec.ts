import { ComponentFixture, TestBed } from '@angular/core/testing';

import { jurassicParkBooksPageComponent } from './jurassicParkBooks-page.component';

describe('jurassicParkBooksPageComponent', () => {
  let component: jurassicParkBooksPageComponent;
  let fixture: ComponentFixture<jurassicParkBooksPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [jurassicParkBooksPageComponent]
    });
    fixture = TestBed.createComponent(jurassicParkBooksPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
