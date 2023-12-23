import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDisplayComponent } from './show-display.component';

describe('ShowDisplayComponent', () => {
  let component: ShowDisplayComponent;
  let fixture: ComponentFixture<ShowDisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowDisplayComponent]
    });
    fixture = TestBed.createComponent(ShowDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
