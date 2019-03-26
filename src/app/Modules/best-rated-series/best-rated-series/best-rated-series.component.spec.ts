import {async, ComponentFixture, TestBed,} from '@angular/core/testing';
import {BestRatedSeriesComponent} from './best-rated-series.component';
import {BestRatedTableComponent} from '../best-rated-table/best-rated-table.component';
import {
  MatTabsModule,
  MatIconModule,
  MatTableModule,
  MatProgressSpinnerModule,
  MatDialogModule
} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {RouterModule} from '@angular/router';
import {BrowserDynamicTestingModule} from '@angular/platform-browser-dynamic/testing';
import {AddTabDirective} from '../../../directives/add-tab.directive';


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
        BrowserAnimationsModule,
        RouterModule.forRoot([]),
      ],
      declarations: [BestRatedSeriesComponent, BestRatedTableComponent, AddTabDirective],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
    });
    TestBed.overrideModule(BrowserDynamicTestingModule, {
      set: {
        entryComponents: [BestRatedTableComponent]
      }
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
