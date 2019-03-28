import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BestRatedSeriesComponent } from './best-rated-series/best-rated-series.component';
import { BestRatedSeriesRouting } from './best-reated-series.routing';
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
import { AddTabDirective } from './shared/add-tab.directive';
import { ViewControllerModule } from '../view-controller/view-controller.module';

@NgModule({
  declarations: [
    BestRatedSeriesComponent,
    BestRatedTableComponent,
    AddTabDirective,
  ],
  entryComponents: [
    BestRatedTableComponent,
  ],
  imports: [
    CommonModule,
    BestRatedSeriesRouting,
    MatTabsModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatTooltipModule,
    HighchartsChartModule,
    MatDialogModule,
    ViewControllerModule,
  ],
  exports: [
    BestRatedSeriesComponent,
    BestRatedTableComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BestRatedSeriesModule { }
