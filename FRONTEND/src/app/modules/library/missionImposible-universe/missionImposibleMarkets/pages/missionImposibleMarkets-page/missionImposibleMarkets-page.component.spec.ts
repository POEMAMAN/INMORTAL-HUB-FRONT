import { ComponentFixture, TestBed } from '@angular/core/testing';

import { missionImposibleMarketsPageComponent } from './missionImposibleMarkets-page.component';

describe('missionImposibleMarketsPageComponent', () => {
  let component: missionImposibleMarketsPageComponent;
  let fixture: ComponentFixture<missionImposibleMarketsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [missionImposibleMarketsPageComponent]
    });
    fixture = TestBed.createComponent(missionImposibleMarketsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
