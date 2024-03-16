import { ComponentFixture, TestBed } from '@angular/core/testing';

import { duneMarketsPageComponent } from './duneMarkets-page.component';

describe('duneMarketsPageComponent', () => {
  let component: duneMarketsPageComponent;
  let fixture: ComponentFixture<duneMarketsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [duneMarketsPageComponent]
    });
    fixture = TestBed.createComponent(duneMarketsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
