import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrepusculoUniverseComponent } from './crepusculo-universe.component';

describe('CrepusculoUniverseComponent', () => {
  let component: CrepusculoUniverseComponent;
  let fixture: ComponentFixture<CrepusculoUniverseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrepusculoUniverseComponent]
    });
    fixture = TestBed.createComponent(CrepusculoUniverseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
