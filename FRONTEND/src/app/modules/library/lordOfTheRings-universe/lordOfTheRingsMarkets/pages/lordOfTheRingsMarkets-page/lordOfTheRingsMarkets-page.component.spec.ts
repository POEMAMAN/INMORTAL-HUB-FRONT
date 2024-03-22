import { ComponentFixture, TestBed } from '@angular/core/testing';

import { lordOfTheRingsMarketsPageComponent } from './lordOfTheRingsMarkets-page.component';

describe('lordOfTheRingsMarketsPageComponent', () => {
  let component: lordOfTheRingsMarketsPageComponent;
  let fixture: ComponentFixture<lordOfTheRingsMarketsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [lordOfTheRingsMarketsPageComponent]
    });
    fixture = TestBed.createComponent(lordOfTheRingsMarketsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
