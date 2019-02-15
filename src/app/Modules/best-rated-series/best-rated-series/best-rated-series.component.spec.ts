import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BestRatedSeriesComponent } from './best-rated-series.component';

describe('BestRatedSeriesComponent', () => {
  let component: BestRatedSeriesComponent;
  let fixture: ComponentFixture<BestRatedSeriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BestRatedSeriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BestRatedSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
