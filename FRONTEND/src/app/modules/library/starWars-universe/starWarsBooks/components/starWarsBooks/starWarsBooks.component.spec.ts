import { ComponentFixture, TestBed } from '@angular/core/testing';

import { starWarsBooksComponent } from './starWarsBooks.component';

describe('starWarsBooksComponent', () => {
  let component: starWarsBooksComponent;
  let fixture: ComponentFixture<starWarsBooksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [starWarsBooksComponent]
    });
    fixture = TestBed.createComponent(starWarsBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
