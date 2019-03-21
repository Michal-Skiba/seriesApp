import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TillVievComponent } from './till-viev.component';
import { MovieTillComponent } from '../movie-till/movie-till.component';
import { RouterModule, Router } from '@angular/router';
import { MatCardModule } from '@angular/material';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('TillVievComponent', () => {
  let component: TillVievComponent;
  let fixture: ComponentFixture<TillVievComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot([]),
        MatCardModule,
      ],
      declarations: [ TillVievComponent, MovieTillComponent ],
      schemas: [ NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TillVievComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
