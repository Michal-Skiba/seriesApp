import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MovieTillComponent } from './movie-till.component';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('MovieTillComponent', () => {
  let component: MovieTillComponent;
  let fixture: ComponentFixture<MovieTillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieTillComponent ],
      imports: [
        HttpClientModule,
        RouterModule,
        MatCardModule,
        RouterTestingModule,
      ],
      schemas: [ NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA ]
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
