import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableVievComponent } from './table-viev.component';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatTableModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';

describe('TielVievComponent', () => {
  let component: TableVievComponent;
  let fixture: ComponentFixture<TableVievComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableVievComponent ],
      schemas: [ NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA ],
      imports: [
        MatTableModule,
        RouterTestingModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableVievComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
