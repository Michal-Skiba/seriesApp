import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BestRatedSeriesComponent } from './best-rated-series.component';
import { BestRatedTableComponent } from '../best-rated-table/best-rated-table.component';
import { MatTabsModule, MatIconModule, MatTableModule, MatProgressSpinnerModule, MatDialogModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


describe('BestRatedSeriesComponent', () => {
  let component: BestRatedSeriesComponent;
  let fixture: ComponentFixture<BestRatedSeriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatTabsModule,
        MatIconModule,
        MatTableModule,
        MatProgressSpinnerModule,
        HttpClientModule,
        MatDialogModule,
        BrowserAnimationsModule
      ],
      declarations: [ BestRatedSeriesComponent,  BestRatedTableComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BestRatedSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
