import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopRatedSerieComponent } from './top-rated-serie.component';

describe('TopRatedSerieComponent', () => {
  let component: TopRatedSerieComponent;
  let fixture: ComponentFixture<TopRatedSerieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopRatedSerieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopRatedSerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
