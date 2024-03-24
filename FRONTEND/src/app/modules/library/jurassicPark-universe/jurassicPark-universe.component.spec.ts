import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JurassicParkUniverseComponent } from './jurassicPark-universe.component';

describe('JurassicParkUniverseComponent', () => {
  let component: JurassicParkUniverseComponent;
  let fixture: ComponentFixture<JurassicParkUniverseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JurassicParkUniverseComponent]
    });
    fixture = TestBed.createComponent(JurassicParkUniverseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
