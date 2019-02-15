import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestSeriesComponent } from './latest-series.component';

describe('LatestSeriesComponent', () => {
  let component: LatestSeriesComponent;
  let fixture: ComponentFixture<LatestSeriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatestSeriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
