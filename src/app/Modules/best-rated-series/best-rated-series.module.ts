import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BestRatedSeriesComponent } from './best-rated-series/best-rated-series.component';
import { routing } from './best-reated-series.routing';
import { BestRatedHighchartComponent } from './best-rated-highchart/best-rated-highchart.component';
import {
  MatTabsModule,
  MatTableModule,
  MatProgressSpinnerModule,
  MatIconModule,
  MatTooltipModule,
  MatDialogModule,
} from '@angular/material';
import { BestRatedTableComponent } from './best-rated-table/best-rated-table.component';
import { HighchartsChartModule } from 'highcharts-angular';

@NgModule({
  declarations: [
    BestRatedSeriesComponent,
    BestRatedHighchartComponent,
    BestRatedTableComponent,
  ],
  imports: [
    CommonModule,
    routing,
    MatTabsModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatTooltipModule,
    HighchartsChartModule,
    MatDialogModule,
  ],
  exports: [
    BestRatedSeriesComponent,
  ],
  entryComponents: [BestRatedHighchartComponent],
})
export class BestRatedSeriesModule { }
