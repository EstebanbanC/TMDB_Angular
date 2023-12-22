import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoloMovieComponent } from './solo-movie.component';

describe('SoloMovieComponent', () => {
  let component: SoloMovieComponent;
  let fixture: ComponentFixture<SoloMovieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SoloMovieComponent]
    });
    fixture = TestBed.createComponent(SoloMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
