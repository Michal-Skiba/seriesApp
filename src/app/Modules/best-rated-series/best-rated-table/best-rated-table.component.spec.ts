import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BestRatedTableComponent } from './best-rated-table.component';
import { MatDialog, MatTableModule } from '@angular/material';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { BestRatedSeriesComponent } from '../best-rated-series/best-rated-series.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

describe('BestRatedTableComponent', () => {
  let component: BestRatedTableComponent;
  let fixture: ComponentFixture<BestRatedTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BestRatedTableComponent, BestRatedSeriesComponent ],
      imports: [
        MatTableModule,
        HttpClientModule,
        RouterModule.forRoot([]),
      ],
      schemas: [ NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA ],
      providers: [
        { provide: MatDialog, useValue: {} }, 
      ] 
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BestRatedTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
