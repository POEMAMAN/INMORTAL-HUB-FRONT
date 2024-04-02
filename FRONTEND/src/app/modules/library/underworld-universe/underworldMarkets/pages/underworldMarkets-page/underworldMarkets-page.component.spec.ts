import { ComponentFixture, TestBed } from '@angular/core/testing';

import { underworldMarketsPageComponent } from './underworldMarkets-page.component';

describe('underworldMarketsPageComponent', () => {
  let component: underworldMarketsPageComponent;
  let fixture: ComponentFixture<underworldMarketsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [underworldMarketsPageComponent]
    });
    fixture = TestBed.createComponent(underworldMarketsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
