import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieUpcomingComponent } from './movie-upcoming.component';

describe('MovieUpcomingComponent', () => {
  let component: MovieUpcomingComponent;
  let fixture: ComponentFixture<MovieUpcomingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovieUpcomingComponent]
    });
    fixture = TestBed.createComponent(MovieUpcomingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
