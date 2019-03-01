import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LastTrendsComponent } from './last-trends.component';
import { MatTableModule, MatProgressSpinnerModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';

describe('LastTrendsComponent', () => {
  let component: LastTrendsComponent;
  let fixture: ComponentFixture<LastTrendsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatTableModule,
        MatProgressSpinnerModule,
        HttpClientModule,
      ],
      declarations: [ LastTrendsComponent ],
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
