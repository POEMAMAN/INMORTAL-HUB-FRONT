import { ComponentFixture, TestBed } from '@angular/core/testing';

import { matrixVideoGamesComponent } from './matrixVideoGames.component';

describe('matrixVideoGamesComponent', () => {
  let component: matrixVideoGamesComponent;
  let fixture: ComponentFixture<matrixVideoGamesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [matrixVideoGamesComponent]
    });
    fixture = TestBed.createComponent(matrixVideoGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
