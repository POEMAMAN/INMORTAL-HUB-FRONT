import { ComponentFixture, TestBed } from '@angular/core/testing';

import { crepusculoMarketsPageComponent } from './crepusculoMarkets-page.component';

describe('crepusculoMarketsPageComponent', () => {
  let component: crepusculoMarketsPageComponent;
  let fixture: ComponentFixture<crepusculoMarketsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [crepusculoMarketsPageComponent]
    });
    fixture = TestBed.createComponent(crepusculoMarketsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
