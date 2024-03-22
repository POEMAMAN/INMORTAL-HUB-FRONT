import { ComponentFixture, TestBed } from '@angular/core/testing';

import { indianaJonesBooksComponent } from './indianaJonesBooks.component';

describe('indianaJonesBooksComponent', () => {
  let component: indianaJonesBooksComponent;
  let fixture: ComponentFixture<indianaJonesBooksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [indianaJonesBooksComponent]
    });
    fixture = TestBed.createComponent(indianaJonesBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
