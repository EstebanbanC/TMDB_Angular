import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieMostPopularComponent } from './movie-most-popular.component';

describe('MovieMostPopularComponent', () => {
  let component: MovieMostPopularComponent;
  let fixture: ComponentFixture<MovieMostPopularComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovieMostPopularComponent]
    });
    fixture = TestBed.createComponent(MovieMostPopularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
