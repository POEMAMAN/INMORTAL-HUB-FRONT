import { ComponentFixture, TestBed } from '@angular/core/testing';

import { starswarsMarketsPageComponent } from './starswarsMarkets-page.component';

describe('starswarsMarketsPageComponent', () => {
  let component: starswarsMarketsPageComponent;
  let fixture: ComponentFixture<starswarsMarketsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [starswarsMarketsPageComponent]
    });
    fixture = TestBed.createComponent(starswarsMarketsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
