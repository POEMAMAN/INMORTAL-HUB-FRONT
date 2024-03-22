import { ComponentFixture, TestBed } from '@angular/core/testing';

import { indianaJonesMarketsPageComponent } from './indianaJonesMarkets-page.component';

describe('indianaJonesMarketsPageComponent', () => {
  let component: indianaJonesMarketsPageComponent;
  let fixture: ComponentFixture<indianaJonesMarketsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [indianaJonesMarketsPageComponent]
    });
    fixture = TestBed.createComponent(indianaJonesMarketsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
