import { ComponentFixture, TestBed } from '@angular/core/testing';

import { starWarsBooksPageComponent } from './starWarsBooks-page.component';

describe('starWarsBooksPageComponent', () => {
  let component: starWarsBooksPageComponent;
  let fixture: ComponentFixture<starWarsBooksPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [starWarsBooksPageComponent]
    });
    fixture = TestBed.createComponent(starWarsBooksPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
