import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VievWrapperComponent } from './viev-wrapper.component';

describe('VievComponent', () => {
  let component: VievWrapperComponent;
  let fixture: ComponentFixture<VievWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VievWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VievWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
