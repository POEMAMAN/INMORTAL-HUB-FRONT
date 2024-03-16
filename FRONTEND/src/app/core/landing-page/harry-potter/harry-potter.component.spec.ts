import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HarryPotterComponent } from './harry-potter.component';

describe('HarryPotterComponent', () => {
  let component: HarryPotterComponent;
  let fixture: ComponentFixture<HarryPotterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HarryPotterComponent]
    });
    fixture = TestBed.createComponent(HarryPotterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
