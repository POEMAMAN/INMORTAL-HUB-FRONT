import { ComponentFixture, TestBed } from '@angular/core/testing';

import { matrixMarketsPageComponent } from './matrixMarkets-page.component';

describe('matrixMarketsPageComponent', () => {
  let component: matrixMarketsPageComponent;
  let fixture: ComponentFixture<matrixMarketsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [matrixMarketsPageComponent]
    });
    fixture = TestBed.createComponent(matrixMarketsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
