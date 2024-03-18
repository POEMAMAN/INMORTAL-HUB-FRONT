import { ComponentFixture, TestBed } from '@angular/core/testing';

import { starswarsBooksPageComponent } from './starswarsBooks-page.component';

describe('starswarsBooksPageComponent', () => {
  let component: starswarsBooksPageComponent;
  let fixture: ComponentFixture<starswarsBooksPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [starswarsBooksPageComponent]
    });
    fixture = TestBed.createComponent(starswarsBooksPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
