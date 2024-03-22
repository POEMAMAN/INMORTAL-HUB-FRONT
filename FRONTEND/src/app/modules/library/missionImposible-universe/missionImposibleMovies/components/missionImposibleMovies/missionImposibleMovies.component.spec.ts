import { ComponentFixture, TestBed } from '@angular/core/testing';

import { missionImposibleMoviesComponent } from './missionImposibleMovies.component';

describe('missionImposibleMoviesComponent', () => {
  let component: missionImposibleMoviesComponent;
  let fixture: ComponentFixture<missionImposibleMoviesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [missionImposibleMoviesComponent]
    });
    fixture = TestBed.createComponent(missionImposibleMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
