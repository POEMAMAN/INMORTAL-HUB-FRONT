import { ComponentFixture, TestBed } from '@angular/core/testing';

import { xmenMarketsPageComponent } from './xmenMarkets-page.component';

describe('xmenMarketsPageComponent', () => {
  let component: xmenMarketsPageComponent;
  let fixture: ComponentFixture<xmenMarketsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [xmenMarketsPageComponent]
    });
    fixture = TestBed.createComponent(xmenMarketsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
