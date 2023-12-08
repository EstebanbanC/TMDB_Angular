import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiiComponent } from './apii.component';

describe('ApiiComponent', () => {
  let component: ApiiComponent;
  let fixture: ComponentFixture<ApiiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApiiComponent]
    });
    fixture = TestBed.createComponent(ApiiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
