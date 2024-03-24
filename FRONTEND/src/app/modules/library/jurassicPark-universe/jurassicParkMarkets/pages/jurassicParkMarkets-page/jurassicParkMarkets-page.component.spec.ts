import { ComponentFixture, TestBed } from '@angular/core/testing';

import { jurassicParkMarketsPageComponent } from './jurassicParkMarkets-page.component';

describe('jurassicParkMarketsPageComponent', () => {
  let component: jurassicParkMarketsPageComponent;
  let fixture: ComponentFixture<jurassicParkMarketsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [jurassicParkMarketsPageComponent]
    });
    fixture = TestBed.createComponent(jurassicParkMarketsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
