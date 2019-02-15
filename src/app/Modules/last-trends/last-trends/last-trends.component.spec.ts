import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastTrendsComponent } from './last-trends.component';

describe('LastTrendsComponent', () => {
  let component: LastTrendsComponent;
  let fixture: ComponentFixture<LastTrendsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastTrendsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastTrendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
