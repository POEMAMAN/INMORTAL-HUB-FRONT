import { ComponentFixture, TestBed } from '@angular/core/testing';

import { transformersMarketsPageComponent } from './transformersMarkets-page.component';

describe('transformersMarketsPageComponent', () => {
  let component: transformersMarketsPageComponent;
  let fixture: ComponentFixture<transformersMarketsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [transformersMarketsPageComponent]
    });
    fixture = TestBed.createComponent(transformersMarketsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
