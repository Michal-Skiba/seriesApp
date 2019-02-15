import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BestRatedTableComponent } from './best-rated-table.component';

describe('BestRatedTableComponent', () => {
  let component: BestRatedTableComponent;
  let fixture: ComponentFixture<BestRatedTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BestRatedTableComponent ]
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
