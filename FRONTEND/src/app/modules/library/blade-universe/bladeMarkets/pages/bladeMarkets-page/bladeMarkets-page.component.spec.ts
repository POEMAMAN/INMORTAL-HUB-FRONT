import { ComponentFixture, TestBed } from '@angular/core/testing';

import { bladeMarketsPageComponent } from './bladeMarkets-page.component';

describe('bladeMarketsPageComponent', () => {
  let component: bladeMarketsPageComponent;
  let fixture: ComponentFixture<bladeMarketsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [bladeMarketsPageComponent]
    });
    fixture = TestBed.createComponent(bladeMarketsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
