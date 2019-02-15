import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieTillComponent } from './movie-till.component';

describe('MovieTillComponent', () => {
  let component: MovieTillComponent;
  let fixture: ComponentFixture<MovieTillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieTillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieTillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
