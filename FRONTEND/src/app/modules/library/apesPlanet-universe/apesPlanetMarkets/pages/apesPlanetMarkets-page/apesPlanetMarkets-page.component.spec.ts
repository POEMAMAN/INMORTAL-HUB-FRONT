import { ComponentFixture, TestBed } from '@angular/core/testing';

import { alienMarketsPageComponent } from './alienMarkets-page.component';

describe('alienMarketsPageComponent', () => {
  let component: alienMarketsPageComponent;
  let fixture: ComponentFixture<alienMarketsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [alienMarketsPageComponent]
    });
    fixture = TestBed.createComponent(alienMarketsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
