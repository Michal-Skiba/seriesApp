import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewWrapperComponent } from './view-wrapper.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MatIconModule, MatSlideToggleModule } from '@angular/material';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('ViewComponent', () => {
  let component: ViewWrapperComponent;
  let fixture: ComponentFixture<ViewWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ViewWrapperComponent],
      imports: [
        RouterTestingModule,
        MatIconModule,
        MatSlideToggleModule,
      ],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
