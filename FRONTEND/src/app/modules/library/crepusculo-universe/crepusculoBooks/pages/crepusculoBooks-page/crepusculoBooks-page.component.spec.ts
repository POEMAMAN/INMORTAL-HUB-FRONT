import { ComponentFixture, TestBed } from '@angular/core/testing';

import { crepusculoBooksPageComponent } from './crepusculoBooks-page.component';

describe('crepusculoBooksPageComponent', () => {
  let component: crepusculoBooksPageComponent;
  let fixture: ComponentFixture<crepusculoBooksPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [crepusculoBooksPageComponent]
    });
    fixture = TestBed.createComponent(crepusculoBooksPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
