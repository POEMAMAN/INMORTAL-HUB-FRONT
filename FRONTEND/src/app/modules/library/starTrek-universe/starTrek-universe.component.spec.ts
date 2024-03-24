import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarTrekUniverseComponent } from './starTrek-universe.component';

describe('StarTrekUniverseComponent', () => {
  let component: StarTrekUniverseComponent;
  let fixture: ComponentFixture<StarTrekUniverseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StarTrekUniverseComponent]
    });
    fixture = TestBed.createComponent(StarTrekUniverseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
