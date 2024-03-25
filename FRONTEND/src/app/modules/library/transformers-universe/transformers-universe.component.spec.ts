import { ComponentFixture, TestBed } from '@angular/core/testing';

import { transformersUniverseComponent } from './transformers-universe.component';

describe('transformersUniverseComponent', () => {
  let component: transformersUniverseComponent;
  let fixture: ComponentFixture<transformersUniverseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [transformersUniverseComponent]
    });
    fixture = TestBed.createComponent(transformersUniverseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
