import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvMostPopularComponent } from './tv-most-popular.component';

describe('TvMostPopularComponent', () => {
  let component: TvMostPopularComponent;
  let fixture: ComponentFixture<TvMostPopularComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TvMostPopularComponent]
    });
    fixture = TestBed.createComponent(TvMostPopularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
