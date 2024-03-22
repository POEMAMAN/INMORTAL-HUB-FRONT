import { ComponentFixture, TestBed } from '@angular/core/testing';

import { missionImposibleMoviesPageComponent } from './missionImposibleMovies-page.component';

describe('missionImposibleMoviesPageComponent', () => {
  let component: missionImposibleMoviesPageComponent;
  let fixture: ComponentFixture<missionImposibleMoviesPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [missionImposibleMoviesPageComponent]
    });
    fixture = TestBed.createComponent(missionImposibleMoviesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
