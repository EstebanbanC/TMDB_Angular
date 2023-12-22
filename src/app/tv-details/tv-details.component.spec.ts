import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TVDetailsComponent } from './tv-details.component';

describe('TVDetailsComponent', () => {
  let component: TVDetailsComponent;
  let fixture: ComponentFixture<TVDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TVDetailsComponent]
    });
    fixture = TestBed.createComponent(TVDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
