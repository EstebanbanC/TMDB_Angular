import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TVPopularComponent } from './tv-popular.component';

describe('TVPopularComponent', () => {
  let component: TVPopularComponent;
  let fixture: ComponentFixture<TVPopularComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TVPopularComponent]
    });
    fixture = TestBed.createComponent(TVPopularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
