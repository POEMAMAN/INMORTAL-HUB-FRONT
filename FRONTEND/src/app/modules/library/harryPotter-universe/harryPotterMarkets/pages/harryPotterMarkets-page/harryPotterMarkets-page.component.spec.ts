import { ComponentFixture, TestBed } from '@angular/core/testing';

import { harryPotterMarketsPageComponent } from './harryPotterMarkets-page.component';

describe('harryPotterMarketsPageComponent', () => {
  let component: harryPotterMarketsPageComponent;
  let fixture: ComponentFixture<harryPotterMarketsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [harryPotterMarketsPageComponent]
    });
    fixture = TestBed.createComponent(harryPotterMarketsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
