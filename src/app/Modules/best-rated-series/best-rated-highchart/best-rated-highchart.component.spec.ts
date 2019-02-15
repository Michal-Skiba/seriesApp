import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BestRatedHighchartComponent } from './best-rated-highchart.component';

describe('BestRatedHighchartComponent', () => {
  let component: BestRatedHighchartComponent;
  let fixture: ComponentFixture<BestRatedHighchartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BestRatedHighchartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BestRatedHighchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
