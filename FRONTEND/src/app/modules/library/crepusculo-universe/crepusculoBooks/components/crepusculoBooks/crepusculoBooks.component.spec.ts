import { ComponentFixture, TestBed } from '@angular/core/testing';

import { crepusculoBooksComponent } from './crepusculoBooks.component';

describe('crepusculoBooksComponent', () => {
  let component: crepusculoBooksComponent;
  let fixture: ComponentFixture<crepusculoBooksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [crepusculoBooksComponent]
    });
    fixture = TestBed.createComponent(crepusculoBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
