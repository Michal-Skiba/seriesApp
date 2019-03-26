import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TillViewComponent } from './till-view.component';
import { MovieTillComponent } from '../movie-till/movie-till.component';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('TillViewComponent', () => {
  let component: TillViewComponent;
  let fixture: ComponentFixture<TillViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot([]),
        MatCardModule,
      ],
      declarations: [TillViewComponent, MovieTillComponent],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TillViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
