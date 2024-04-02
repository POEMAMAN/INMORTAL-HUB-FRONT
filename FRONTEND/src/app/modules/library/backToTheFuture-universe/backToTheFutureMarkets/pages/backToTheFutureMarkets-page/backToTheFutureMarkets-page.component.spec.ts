import { ComponentFixture, TestBed } from '@angular/core/testing';

import { backToTheFutureMarketsPageComponent } from './backToTheFutureMarkets-page.component';

describe('backToTheFutureMarketsPageComponent', () => {
  let component: backToTheFutureMarketsPageComponent;
  let fixture: ComponentFixture<backToTheFutureMarketsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [backToTheFutureMarketsPageComponent]
    });
    fixture = TestBed.createComponent(backToTheFutureMarketsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
