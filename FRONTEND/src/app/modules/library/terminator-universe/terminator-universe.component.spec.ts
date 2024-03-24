import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminatorUniverseComponent } from './terminator-universe.component';

describe('TerminatorUniverseComponent', () => {
  let component: TerminatorUniverseComponent;
  let fixture: ComponentFixture<TerminatorUniverseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TerminatorUniverseComponent]
    });
    fixture = TestBed.createComponent(TerminatorUniverseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
