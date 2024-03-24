import { ComponentFixture, TestBed } from '@angular/core/testing';

import { terminatorMarketsPageComponent } from './terminatorMarkets-page.component';

describe('terminatorMarketsPageComponent', () => {
  let component: terminatorMarketsPageComponent;
  let fixture: ComponentFixture<terminatorMarketsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [terminatorMarketsPageComponent]
    });
    fixture = TestBed.createComponent(terminatorMarketsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
