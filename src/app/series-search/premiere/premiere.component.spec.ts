import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PremiereComponent } from './premiere.component';
import { MatIconModule, MatProgressSpinnerModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import * as moment from 'moment';

describe('PremiereComponent', () => {
  let component: PremiereComponent;
  let fixture: ComponentFixture<PremiereComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PremiereComponent],
      imports: [
        BrowserAnimationsModule,
        HttpClientModule,
        MatIconModule,
        MatProgressSpinnerModule,
        RouterModule.forRoot([]),
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PremiereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('date should be equal to todays date', () => {
    expect(component.date).toBe(moment(new Date()).format('YYYY-MM-DD'));
  });

  it('dayLater function should return one day later date, than it is', () => {
    const dateBeforeUseFunc = component.date;
    component.dayLater();
    expect(component.date).toBe(moment(dateBeforeUseFunc).add(1, 'days').format('YYYY-MM-DD'));
    component.dayLater();
    expect(component.date).toBe(moment(dateBeforeUseFunc).add(2, 'days').format('YYYY-MM-DD'));
  });

  it('dayBefore function should return one day later date, than it is', () => {
    const dateBeforeUseFunc = component.date;
    component.dayBefore();
    expect(component.date).toBe(moment(dateBeforeUseFunc).subtract(1, 'days').format('YYYY-MM-DD'));
    component.dayBefore();
    expect(component.date).toBe(moment(dateBeforeUseFunc).subtract(2, 'days').format('YYYY-MM-DD'));
  });
});

