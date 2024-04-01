import { ComponentFixture, TestBed } from '@angular/core/testing';

import { matrixVideoGamesPageComponent } from './matrixVideoGames-page.component';

describe('matrixVideoGamesPageComponent', () => {
  let component: matrixVideoGamesPageComponent;
  let fixture: ComponentFixture<matrixVideoGamesPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [matrixVideoGamesPageComponent]
    });
    fixture = TestBed.createComponent(matrixVideoGamesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
