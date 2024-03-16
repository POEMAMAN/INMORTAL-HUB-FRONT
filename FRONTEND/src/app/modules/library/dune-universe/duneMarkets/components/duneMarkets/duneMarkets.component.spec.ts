import { ComponentFixture, TestBed } from '@angular/core/testing';

import { duneMarketsComponent } from './duneMarkets.component';

describe('duneMarketsComponent', () => {
  let component: duneMarketsComponent;
  let fixture: ComponentFixture<duneMarketsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [duneMarketsComponent]
    });
    fixture = TestBed.createComponent(duneMarketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
