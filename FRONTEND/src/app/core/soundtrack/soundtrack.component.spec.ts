import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoundtrackComponent } from './soundtrack.component';

describe('SoundtrackComponent', () => {
  let component: SoundtrackComponent;
  let fixture: ComponentFixture<SoundtrackComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SoundtrackComponent]
    });
    fixture = TestBed.createComponent(SoundtrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

