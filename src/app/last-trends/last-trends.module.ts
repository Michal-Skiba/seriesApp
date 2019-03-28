import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LastTrendsComponent } from './last-trends/last-trends.component';
import { routing } from './last-trends.routing';
import {
  MatTableModule,
  MatProgressSpinnerModule,
  MatIconModule,
} from '@angular/material';
import { ViewControllerModule } from '../view-controller/view-controller.module';

@NgModule({
  declarations: [
    LastTrendsComponent
  ],
  imports: [
    CommonModule,
    routing,
    MatTableModule,
    MatProgressSpinnerModule,
    MatIconModule,
    ViewControllerModule,
  ],
  exports: [
    LastTrendsComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LastTrendsModule { }
