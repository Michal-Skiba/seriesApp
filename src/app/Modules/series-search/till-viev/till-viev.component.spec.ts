import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TillVievComponent } from './till-viev.component';

describe('TillVievComponent', () => {
  let component: TillVievComponent;
  let fixture: ComponentFixture<TillVievComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TillVievComponent ]
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
