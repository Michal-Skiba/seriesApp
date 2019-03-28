import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LastTrendsComponent } from './last-trends.component';
import { MatTableModule, MatProgressSpinnerModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

describe('LastTrendsComponent', () => {
  let component: LastTrendsComponent;
  let fixture: ComponentFixture<LastTrendsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatTableModule,
        MatProgressSpinnerModule,
        HttpClientModule,
        RouterModule.forRoot([]),
      ],
      declarations: [ LastTrendsComponent ],
      schemas: [ NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA ],
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
