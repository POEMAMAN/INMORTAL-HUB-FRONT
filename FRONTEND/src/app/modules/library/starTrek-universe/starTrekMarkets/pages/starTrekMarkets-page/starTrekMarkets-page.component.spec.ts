import { ComponentFixture, TestBed } from '@angular/core/testing';

import { starTrekMarketsPageComponent } from './starTrekMarkets-page.component';

describe('starTrekMarketsPageComponent', () => {
  let component: starTrekMarketsPageComponent;
  let fixture: ComponentFixture<starTrekMarketsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [starTrekMarketsPageComponent]
    });
    fixture = TestBed.createComponent(starTrekMarketsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
