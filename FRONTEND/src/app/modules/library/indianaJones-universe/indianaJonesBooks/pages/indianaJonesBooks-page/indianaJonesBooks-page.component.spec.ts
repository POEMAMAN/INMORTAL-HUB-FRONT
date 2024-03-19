import { ComponentFixture, TestBed } from '@angular/core/testing';

import { indianaJonesBooksPageComponent } from './indianaJonesBooks-page.component';

describe('indianaJonesBooksPageComponent', () => {
  let component: indianaJonesBooksPageComponent;
  let fixture: ComponentFixture<indianaJonesBooksPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [indianaJonesBooksPageComponent]
    });
    fixture = TestBed.createComponent(indianaJonesBooksPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
