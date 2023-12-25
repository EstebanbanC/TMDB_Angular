import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvFooterComponent } from './tv-footer.component';

describe('TvFooterComponent', () => {
  let component: TvFooterComponent;
  let fixture: ComponentFixture<TvFooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TvFooterComponent]
    });
    fixture = TestBed.createComponent(TvFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
