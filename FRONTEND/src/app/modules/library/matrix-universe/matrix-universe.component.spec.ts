import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatrixUniverseComponent } from './matrix-universe.component';

describe('MatrixUniverseComponent', () => {
  let component: MatrixUniverseComponent;
  let fixture: ComponentFixture<MatrixUniverseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MatrixUniverseComponent]
    });
    fixture = TestBed.createComponent(MatrixUniverseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
