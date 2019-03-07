import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableVievComponent } from './table-viev.component';

describe('TielVievComponent', () => {
  let component: TableVievComponent;
  let fixture: ComponentFixture<TableVievComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableVievComponent ]
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
