import { ComponentFixture, TestBed } from '@angular/core/testing';

import { backToTheFutureUniverseComponent } from './backToTheFuture-universe.component';

describe('backToTheFutureUniverseComponent', () => {
  let component: backToTheFutureUniverseComponent;
  let fixture: ComponentFixture<backToTheFutureUniverseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [backToTheFutureUniverseComponent]
    });
    fixture = TestBed.createComponent(backToTheFutureUniverseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
