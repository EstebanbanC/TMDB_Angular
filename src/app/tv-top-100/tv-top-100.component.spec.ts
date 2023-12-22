import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TVTop100Component } from './tv-top-100.component';

describe('TVTop100Component', () => {
  let component: TVTop100Component;
  let fixture: ComponentFixture<TVTop100Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TVTop100Component]
    });
    fixture = TestBed.createComponent(TVTop100Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
