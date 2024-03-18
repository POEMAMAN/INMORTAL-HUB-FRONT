import { ComponentFixture, TestBed } from '@angular/core/testing';

import { hungerGamesBooksPageComponent } from './hungerGamesBooks-page.component';

describe('hungerGamesBooksPageComponent', () => {
  let component: hungerGamesBooksPageComponent;
  let fixture: ComponentFixture<hungerGamesBooksPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [hungerGamesBooksPageComponent]
    });
    fixture = TestBed.createComponent(hungerGamesBooksPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
